import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs/operators';
import { getAreaName, isInPuro } from './areas';

interface Impling {
  discoveredtime: number; // unix seconds
  npcid: number;
  plane: number;
  world: number;
  xcoord: number;
  ycoord: number;
}

interface ImplingType {
  id: number;
  name: string;
  slug: string;
  tier: number;
}

// One impling, possibly reported several times as it moves around.
interface Sighting {
  key: string; // key of the newest report
  reportKeys: string[];
  latest: Impling;
  type: ImplingType;
  area: string;
  seenAt: number; // ms
  count: number;
}

type Sound = '' | 'impling' | 'whistle' | 'iphone';

interface Settings {
  hiddenIds: number[];
  showPuro: boolean;
  minTier: number;
  sounds: { [npcid: number]: Sound };
  alertsEnabled: boolean;
}

// Our Cloudflare Worker (see proxy/), which relays the ImplingFinderRT API
// with CORS headers. It returns sightings from the last 10 minutes.
const API_URL = 'https://impling-proxy.magnav56-b1e.workers.dev/';
// The API owner asked clients to poll at a random 5-10s interval so
// requests from many users don't arrive in bursts.
const POLL_MIN_MS = 5000;
const POLL_MAX_MS = 10000;
const NEW_BADGE_MS = 15000;
const MERGE_DISTANCE = 30; // tiles
const MERGE_GAP_MS = 10 * 60 * 1000;
const SETTINGS_KEY = 'impling-finder-settings';
const BASE_TITLE = 'Impling Finder';

const TYPES: ImplingType[] = [
  { id: 1635, name: 'Baby', slug: 'baby', tier: 1 },
  { id: 1636, name: 'Young', slug: 'young', tier: 2 },
  { id: 1637, name: 'Gourmet', slug: 'gourmet', tier: 3 },
  { id: 1638, name: 'Earth', slug: 'earth', tier: 4 },
  { id: 1639, name: 'Essence', slug: 'essence', tier: 5 },
  { id: 1640, name: 'Eclectic', slug: 'eclectic', tier: 6 },
  { id: 1641, name: 'Nature', slug: 'nature', tier: 7 },
  { id: 1642, name: 'Magpie', slug: 'magpie', tier: 8 },
  { id: 1643, name: 'Ninja', slug: 'ninja', tier: 9 },
  { id: 8741, name: 'Crystal', slug: 'crystal', tier: 10 },
  { id: 1644, name: 'Dragon', slug: 'dragon', tier: 11 },
  { id: 7233, name: 'Lucky', slug: 'lucky', tier: 12 },
];

// Each impling type has more than one NPC id (e.g. 1652 is also a Magpie, and
// Crystal implings have a variant per jar colour). Map them all to the ids
// above so filters, sounds and colours work for every variant.
function normalize(i: Impling): Impling {
  let npcid = i.npcid;
  if (npcid >= 1645 && npcid <= 1654) npcid -= 10;
  else if (npcid === 7302) npcid = 7233;
  else if (npcid >= 8742 && npcid <= 8757) npcid = 8741;
  return { ...i, npcid };
}

const DEFAULT_SETTINGS: Settings = {
  hiddenIds: [],
  showPuro: true,
  minTier: 0,
  sounds: { 1644: 'impling', 7233: 'impling' },
  alertsEnabled: false,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private readonly http: HttpClient,
    private readonly sanitizer: DomSanitizer,
    private readonly title: Title
  ) {}

  public readonly filterTypes = TYPES.filter((t) =>
    [1642, 1643, 8741, 1644, 7233].includes(t.id)
  );
  public readonly tierOptions = [
    { value: 0, label: 'All implings' },
    { value: 8, label: 'Magpie and above' },
    { value: 9, label: 'Ninja and above' },
    { value: 10, label: 'Crystal and above' },
    { value: 11, label: 'Dragon and above' },
  ];
  public readonly soundOptions: { value: Sound; label: string }[] = [
    { value: '', label: 'No sound' },
    { value: 'impling', label: 'Impling!' },
    { value: 'whistle', label: 'Whistle' },
    { value: 'iphone', label: 'iPhone' },
  ];

  public settings: Settings = this.loadSettings();
  public showSettings = false;
  public connection: 'connecting' | 'live' | 'error' = 'connecting';
  public lastUpdate = 0;
  public now = Date.now();
  public sightings: Sighting[] = [];
  public selected: Sighting | null = null;
  public mapUrl: SafeResourceUrl | null = null;
  public mapMoved = false;
  private mapLoading = false;
  public copiedKey: string | null = null;
  public audioUnlocked = false;

  private reports: Impling[] = [];
  private firstSeen = new Map<string, number>();
  private loading = false;
  private unread = 0;
  private unreadName = '';
  private unreadNpc = 0;
  private clockTimer = 0;
  private pollTimer = 0;

  ngOnInit() {
    this.poll();
    this.clockTimer = window.setInterval(() => (this.now = Date.now()), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.clockTimer);
    clearTimeout(this.pollTimer);
  }

  // Waits for each request to finish, then schedules the next one after a
  // fresh random delay.
  private async poll() {
    await this.fetch();
    const delay = POLL_MIN_MS + Math.random() * (POLL_MAX_MS - POLL_MIN_MS);
    this.pollTimer = window.setTimeout(() => this.poll(), delay);
  }

  // --- Data -------------------------------------------------------------

  private async fetch() {
    if (this.loading) return;
    this.loading = true;
    try {
      const data = await this.http
        .get<Impling[]>(API_URL)
        .pipe(timeout(10000))
        .toPromise();
      this.onReports((Array.isArray(data) ? data : []).map(normalize));
      this.connection = 'live';
      this.lastUpdate = Date.now();
    } catch (e) {
      this.connection = 'error';
    } finally {
      this.loading = false;
    }
  }

  private onReports(items: Impling[]) {
    const firstLoad = this.firstSeen.size === 0 && this.reports.length === 0;
    const now = Date.now();
    const fresh: Impling[] = [];
    for (const item of items) {
      const key = this.reportKey(item);
      if (this.firstSeen.has(key)) continue;
      // Reports already in the feed on page load are not "new".
      this.firstSeen.set(key, firstLoad ? 0 : now);
      if (!firstLoad) fresh.push(item);
    }
    this.reports = items;
    this.rebuild();

    if (!this.selected && this.sightings.length) {
      this.select(this.sightings[0]);
    }
    const alerting = fresh.filter((i) => this.isVisible(i));
    if (alerting.length) this.alert(alerting);
  }

  private reportKey(i: Impling): string {
    return `${i.discoveredtime}-${i.world}-${i.xcoord}-${i.ycoord}`;
  }

  private seenAt(i: Impling): number {
    return i.discoveredtime * 1000;
  }

  public rebuild() {
    const unique = new Map<string, Impling>();
    this.reports
      .filter((i) => this.isVisible(i))
      .forEach((i) => unique.set(this.reportKey(i), i));
    const sorted = [...unique.values()].sort(
      (a, b) => this.seenAt(b) - this.seenAt(a)
    );

    // Walk newest to oldest, chaining each report onto a sighting of the
    // same impling in the same world if it was recently seen nearby.
    const sightings: Sighting[] = [];
    const tails = new Map<Sighting, Impling>();
    for (const report of sorted) {
      const match = sightings.find((s) => {
        const tail = tails.get(s);
        return (
          tail.npcid === report.npcid &&
          tail.world === report.world &&
          Math.abs(tail.xcoord - report.xcoord) <= MERGE_DISTANCE &&
          Math.abs(tail.ycoord - report.ycoord) <= MERGE_DISTANCE &&
          this.seenAt(tail) - this.seenAt(report) <= MERGE_GAP_MS
        );
      });
      if (match) {
        match.count++;
        match.reportKeys.push(this.reportKey(report));
        tails.set(match, report);
        continue;
      }
      const sighting: Sighting = {
        key: this.reportKey(report),
        reportKeys: [this.reportKey(report)],
        latest: report,
        type: this.getType(report.npcid),
        area: getAreaName(report.xcoord, report.ycoord),
        seenAt: this.seenAt(report),
        count: 1,
      };
      sightings.push(sighting);
      tails.set(sighting, report);
    }
    this.sightings = sightings;
  }

  public getType(npcid: number): ImplingType {
    return (
      TYPES.find((t) => t.id === npcid) || {
        id: npcid,
        name: `Impling ${npcid}`,
        slug: 'unknown',
        tier: 0,
      }
    );
  }

  private isVisible(i: Impling): boolean {
    const type = this.getType(i.npcid);
    return (
      !this.settings.hiddenIds.includes(i.npcid) &&
      type.tier >= this.settings.minTier &&
      (this.settings.showPuro || !isInPuro(i.xcoord, i.ycoord))
    );
  }

  // --- Feed display ----------------------------------------------------

  public trackSighting(_: number, s: Sighting) {
    return s.key;
  }

  public isNew(s: Sighting): boolean {
    const seen = this.firstSeen.get(s.key);
    return !!seen && this.now - seen < NEW_BADGE_MS;
  }

  public isSelected(s: Sighting): boolean {
    return !!this.selected && s.reportKeys.includes(this.selected.key);
  }

  public age(ms: number): string {
    return this.duration(this.now - ms) + ' ago';
  }

  public duration(ms: number): string {
    const s = Math.max(0, Math.floor(ms / 1000));
    if (s < 60) return `${s}s`;
    if (s < 3600) return `${Math.floor(s / 60)}m`;
    if (s < 86400) return `${Math.floor(s / 3600)}h`;
    return `${Math.floor(s / 86400)}d`;
  }

  // Fresh sightings are fully opaque and fade out until the API drops them
  // after 10 minutes.
  public fade(s: Sighting): number {
    const minutes = (this.now - s.seenAt) / 60000;
    if (minutes <= 2) return 1;
    return Math.max(0.45, 1 - ((minutes - 2) / 8) * 0.55);
  }

  public hasReports(): boolean {
    return this.reports.length > 0;
  }

  public statusLabel(): string {
    if (this.connection === 'connecting') return 'Connecting…';
    if (this.connection === 'error') return 'Connection lost · retrying';
    return `Live · updated ${this.duration(this.now - this.lastUpdate)} ago`;
  }

  // --- Map ---------------------------------------------------------------

  public select(s: Sighting) {
    this.selected = s;
    this.recenterMap();
  }

  public recenterMap() {
    if (!this.selected) return;
    this.mapMoved = false;
    this.mapLoading = true;
    // The cache-buster makes the iframe reload even if the URL is unchanged.
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `${this.getMapUrl(this.selected.latest)}&t=${Date.now()}`
    );
  }

  // explv centres on a tile's corner; +0.5 centres on the tile itself so it
  // lines up with the crosshair.
  public getMapUrl(i: Impling): string {
    return `https://explv.github.io/?centreX=${i.xcoord + 0.5}&centreY=${i.ycoord + 0.5}&centreZ=${i.plane || 0}&zoom=11`;
  }

  // The map is cross-origin, so panning can't be observed directly. Clicking
  // into it moves focus to the iframe, which blurs this window: assume the
  // map may have moved and hide the crosshair.
  @HostListener('window:blur')
  public onBlur() {
    setTimeout(() => {
      if (!this.mapLoading && document.activeElement instanceof HTMLIFrameElement) {
        this.mapMoved = true;
      }
    });
  }

  // explv focuses itself when it starts up. Give focus back to this page so
  // the user's first real click into the map is still detected as a blur.
  public onMapLoad(frame: HTMLIFrameElement) {
    setTimeout(() => {
      if (document.activeElement === frame) frame.blur();
      this.mapLoading = false;
    }, 500);
  }

  public async copyWorld(s: Sighting, event: MouseEvent) {
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(String(s.latest.world));
      this.copiedKey = s.key;
      setTimeout(() => {
        if (this.copiedKey === s.key) this.copiedKey = null;
      }, 1500);
    } catch (e) {}
  }

  // --- Alerts ------------------------------------------------------------

  public async toggleAlerts() {
    this.settings.alertsEnabled = !this.settings.alertsEnabled;
    this.saveSettings();
    if (
      this.settings.alertsEnabled &&
      'Notification' in window &&
      Notification.permission === 'default'
    ) {
      await Notification.requestPermission();
    }
  }

  public notificationsBlocked(): boolean {
    return 'Notification' in window && Notification.permission === 'denied';
  }

  private alert(fresh: Impling[]) {
    const best = fresh.reduce((a, b) =>
      this.getType(b.npcid).tier > this.getType(a.npcid).tier ? b : a
    );
    const bestType = this.getType(best.npcid);

    if (!document.hasFocus()) {
      this.unread += fresh.length;
      if (bestType.tier >= this.getType(this.unreadNpc).tier) {
        this.unreadName = bestType.name;
        this.unreadNpc = best.npcid;
      }
      this.title.setTitle(`(${this.unread}) ${this.unreadName}! · ${BASE_TITLE}`);
    }

    if (!this.settings.alertsEnabled) return;

    // Play the sound of the rarest new impling that has one.
    const withSound = fresh
      .filter((i) => this.settings.sounds[i.npcid])
      .sort((a, b) => this.getType(b.npcid).tier - this.getType(a.npcid).tier);
    if (withSound.length) this.playSound(this.settings.sounds[withSound[0].npcid]);

    if (
      !document.hasFocus() &&
      'Notification' in window &&
      Notification.permission === 'granted'
    ) {
      const sighting = this.sightings.find((s) =>
        s.reportKeys.includes(this.reportKey(best))
      );
      const n = new Notification(`${bestType.name} impling · W${best.world}`, {
        body: `${getAreaName(best.xcoord, best.ycoord)} (${best.xcoord}, ${best.ycoord})`,
        tag: this.reportKey(best),
      });
      n.onclick = () => {
        window.focus();
        if (sighting) this.select(sighting);
        n.close();
      };
    }
  }

  @HostListener('window:focus')
  public onFocus() {
    this.unread = 0;
    this.unreadName = '';
    this.unreadNpc = 0;
    this.title.setTitle(BASE_TITLE);
  }

  // Browsers only allow audio after the user has interacted with the page.
  @HostListener('document:pointerdown')
  @HostListener('document:keydown')
  public onUserGesture() {
    this.audioUnlocked = true;
  }

  public playSound(sound: Sound) {
    if (!sound) return;
    const files = {
      impling: './assets/impling.m4a',
      whistle: './assets/whistle.mp3',
      iphone: './assets/iphone.mp3',
    };
    const audio = new Audio(files[sound]);
    audio.volume = 0.3;
    audio.play().catch(() => (this.audioUnlocked = false));
  }

  // --- Settings ----------------------------------------------------------

  public isHidden(npcid: number): boolean {
    return this.settings.hiddenIds.includes(npcid);
  }

  public toggleType(npcid: number) {
    this.settings.hiddenIds = this.isHidden(npcid)
      ? this.settings.hiddenIds.filter((id) => id !== npcid)
      : [...this.settings.hiddenIds, npcid];
    this.onSettingsChange();
  }

  public togglePuro() {
    this.settings.showPuro = !this.settings.showPuro;
    this.onSettingsChange();
  }

  public setMinTier(value: string) {
    this.settings.minTier = Number(value);
    this.onSettingsChange();
  }

  public setSound(npcid: number, sound: Sound) {
    this.settings.sounds = { ...this.settings.sounds, [npcid]: sound };
    this.saveSettings();
    this.playSound(sound);
  }

  private onSettingsChange() {
    this.saveSettings();
    this.rebuild();
  }

  private loadSettings(): Settings {
    try {
      const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
      return { ...DEFAULT_SETTINGS, ...saved };
    } catch (e) {
      return { ...DEFAULT_SETTINGS };
    }
  }

  private saveSettings() {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings));
  }
}

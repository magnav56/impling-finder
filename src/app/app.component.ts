import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';

interface Impling {
  discoveredtime: number;
  insertedtime: string;
  npcid: number;
  plane: number;
  world: number;
  xcoord: number;
  ycoord: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private readonly http: HttpClient) {}
  public implings: Impling[] = [];
  public loading = false;
  public started = false;
  public deActivatedIds = [];
  public showPuro = true;
  public newImplings: Impling[] = [];

  ngOnInit() {}

  public start() {
    this.started = true;
    this.fetch();
    setInterval(() => {
      this.fetch();
    }, 4000);
  }

  private async fetch() {
    if (this.loading) return;
    this.loading = true;
    const data = await this.http
      .get<any>(
        'https://puos0bfgxc2lno5-implingdb.adb.us-phoenix-1.oraclecloudapps.com/ords/impling/implingdev/dev?limit=30'
      )
      .toPromise();

    this.loading = false;
    this.newImplings = data.items;
    this.setImplings(data.items);
    this.implings = data.items;
  }

  private shouldPlayWhistle(newImplings: Impling[]) {
    if (newImplings.some((i) => this.showImpling(i))) {
      this.playAudio();
    }
  }

  private setImplings(implings: Impling[]) {
    let newImplings = implings.filter(
      (i) =>
        !this.implings.find(
          (imp) =>
            imp.discoveredtime === i.discoveredtime &&
            imp.xcoord === i.xcoord &&
            imp.ycoord === i.ycoord
        )
    );
    this.shouldPlayWhistle(newImplings);
    this.implings.unshift(...newImplings);
    this.implings = this.implings.slice(0, 30);
  }

  public getImplingName(id) {
    switch (id) {
      case 1635:
        return 'Baby';
      case 1636:
        return 'Young';
      case 1637:
        return 'Gourmet';
      case 1638:
        return 'Earth';
      case 1639:
        return 'Essence';
      case 1640:
        return 'Eclectic';
      case 1641:
        return 'Nature';
      case 1642:
        return 'Magpie';
      case 1643:
        return 'Ninja';
      case 1644:
        return 'Dragon';
      case 7233:
        return 'Lucky';
      case 8741:
        return 'Crystal';
    }
    return id;
  }

  public isActivated(id) {
    return !this.deActivatedIds.includes(id);
  }

  public toggleId(id) {
    if (this.deActivatedIds.includes(id)) {
      this.deActivatedIds = this.deActivatedIds.filter((i) => i !== id);
    } else {
      this.deActivatedIds.push(id);
    }
  }

  public isInPuro(x, y) {
    if (x >= 2557 && x <= 2627 && y >= 4287 && y <= 4353) {
      return true;
    }
    return false;
  }

  public togglePuro() {
    this.showPuro = !this.showPuro;
  }

  public showImpling(impling): boolean {
    return (
      this.isActivated(impling.npcid) &&
      (this.showPuro ? true : !this.isInPuro(impling.xcoord, impling.ycoord))
    );
  }

  public playAudio() {
    let audio = new Audio();
    audio.src = './assets/impling.m4a';
    audio.volume = 0.3;
    audio.load();
    audio.play();
  }
}

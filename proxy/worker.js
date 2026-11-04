// Cloudflare Worker that relays the ImplingFinderRT API to the website.
//
// The API doesn't send CORS headers, so browsers can't read it directly. This
// worker calls it server-side (like the RuneLite plugin does) and adds the
// headers. Responses are shared between visitors for a few seconds, so the
// upstream API gets roughly one request per CACHE_MS no matter how many people
// have the site open.

const UPSTREAM = 'https://zoorgufqkavyngfhucgc.supabase.co/functions/v1/get-implings';
const API_KEY = 'sb_publishable_QPK-l1a9QAakMIHPrCDCQQ_sY-quMIT';
const CACHE_MS = 5000;
const ALLOWED_ORIGINS = ['https://magnav56.github.io', 'http://localhost:4200'];

// Kept in memory per worker instance. (The Cache API doesn't work on
// *.workers.dev domains, so a module-level variable is used instead.)
let cached = null; // { body, status, time }
let inFlight = null;

// Magpie, Ninja, Dragon, Lucky and Crystal (with their alternate NPC ids).
// The API also returns thousands of low-tier implings, mostly in Puro-Puro,
// which the site doesn't show; dropping them keeps responses small.
function isWanted(npcid) {
  return (
    [1642, 1652, 1643, 1653, 1644, 1654, 7233, 7302].includes(npcid) ||
    (npcid >= 8741 && npcid <= 8757)
  );
}

async function fetchUpstream() {
  const res = await fetch(UPSTREAM, {
    headers: { apikey: API_KEY, Authorization: `Bearer ${API_KEY}` },
  });
  let body = await res.text();
  if (res.status === 200) {
    body = JSON.stringify(JSON.parse(body).filter((i) => isWanted(i.npcid)));
  }
  return { body, status: res.status, time: Date.now() };
}

async function getData() {
  if (cached && Date.now() - cached.time < CACHE_MS) return cached;
  // If several visitors ask at once, share one upstream request.
  if (!inFlight) {
    inFlight = fetchUpstream()
      .then((result) => {
        if (result.status === 200) cached = result;
        return result;
      })
      .finally(() => (inFlight = null));
  }
  return inFlight;
}

export default {
  async fetch(request) {
    const origin = request.headers.get('Origin');
    const cors = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      Vary: 'Origin',
    };

    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (request.method !== 'GET') {
      return new Response('Method not allowed', { status: 405, headers: cors });
    }

    try {
      const data = await getData();
      return new Response(data.body, {
        status: data.status,
        headers: { ...cors, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Upstream request failed' }), {
        status: 502,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }
  },
};

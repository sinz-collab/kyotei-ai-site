const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appSource = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const start = appSource.indexOf("function hasCompletedFinalPrediction");
const end = appSource.indexOf("function parseRoute");
assert.ok(start >= 0 && end > start, "priority venue refresh helpers must exist");

const races = Array.from({ length: 12 }, (_, index) => ({
  race: index + 1,
  racers: Array.from({ length: 6 }, (__, lane) => ({ lane: lane + 1 })),
}));
const morningPayload = {
  date: "2026-10-25",
  races: structuredClone(races),
  preds: { "1": { predictionStage: { badge: "仮予想" } } },
};
const livePayload = {
  date: "2026-10-25",
  races: structuredClone(races),
  preds: {
    "1": {
      predictionStage: { badge: "本予想" },
      probabilityReviewStatus: "reviewed",
      ticketSelection: { modelVersion: "ashiya_v51_631" },
    },
  },
};

let intervalCallback = null;
let venueFetchCount = 0;
let buildCheckCount = 0;
let liveLoadCount = 0;
let renderCount = 0;
const syncState = { textContent: "" };
const context = {
  currentVenueSlug: "ashiya",
  currentPayload: structuredClone(morningPayload),
  currentRaceNo: 1,
  currentPane: "prediction",
  liveRefreshTimer: null,
  SITE_BUILD: "test-build",
  manifest: {
    date: "2026-10-25",
    venues: [{
      slug: "ashiya",
      name: "芦屋",
      date: "2026-10-25",
      dataPath: "venues/ashiya/20261025.json",
    }],
  },
  async fetchJson(dataPath) {
    venueFetchCount += 1;
    assert.equal(dataPath, "venues/ashiya/20261025.json");
    return structuredClone(livePayload);
  },
  async fetch(url, options) {
    buildCheckCount += 1;
    assert.equal(options.cache, "no-store");
    return { ok: true, async text() { return 'var build = "test-build";'; } };
  },
  async loadLiveRace() { liveLoadCount += 1; },
  renderPane() { renderCount += 1; },
  setInterval(callback, milliseconds) {
    assert.equal(milliseconds, 60 * 1000);
    intervalCallback = callback;
    return 1;
  },
  clearInterval() {},
  document: { hidden: false },
  location: {
    pathname: "/kyotei-ai-site/",
    href: "https://example.test/kyotei-ai-site/#venue=ashiya",
    replace() {},
  },
  URL,
  $(id) {
    assert.equal(id, "syncState");
    return syncState;
  },
  structuredClone,
};

vm.createContext(context);
vm.runInContext(
  `${appSource.slice(start, end)}
   globalThis.startLiveRefreshForTest = startLiveRefresh;`,
  context,
);

(async () => {
  context.startLiveRefreshForTest();
  assert.equal(typeof intervalCallback, "function");
  await Promise.all([intervalCallback(), intervalCallback()]);

  assert.equal(context.currentPayload.preds["1"].predictionStage.badge, "本予想");
  assert.equal(context.currentRaceNo, 1);
  assert.equal(context.currentPane, "prediction");
  assert.equal(venueFetchCount, 1, "overlapping ticks must be coalesced");
  assert.equal(buildCheckCount, 1);
  assert.equal(liveLoadCount, 1);
  assert.equal(renderCount, 1);
  assert.equal(syncState.textContent, "LIVE JSON");
  console.log("Ashiya live payload refreshes every minute without stale cache");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

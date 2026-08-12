const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appSource = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const start = appSource.indexOf("function hasCompletedFinalPrediction");
const end = appSource.indexOf("function parseRoute");
assert.ok(start >= 0 && end > start, "Wakamatsu venue refresh helpers must exist");

const fixturePath = path.join(
  __dirname,
  "..",
  "..",
  "kyotei-ai-data",
  "data",
  "venues",
  "wakamatsu",
  "20260812.json",
);
const finalPayload = JSON.parse(fs.readFileSync(fixturePath, "utf8"));
const initialPayload = structuredClone(finalPayload);

for (const race of initialPayload.races) {
  race.prediction = structuredClone(race.predictionPre);
  delete race.predictionFinal;
  initialPayload.preds[String(race.race)] = structuredClone(race.predictionPre);
}

// The final-prediction promotion must not depend on odds availability.
for (const race of finalPayload.races) {
  delete race.odds;
  if (race.predictionFinal) delete race.predictionFinal.odds;
}

let intervalCallback = null;
let fetchCount = 0;
let liveLoadCount = 0;
let renderCount = 0;
let renderedBadge = null;
const syncState = { textContent: "" };

const context = {
  currentVenueSlug: "wakamatsu",
  currentPayload: initialPayload,
  currentRaceNo: 3,
  currentPane: "prediction",
  liveRefreshTimer: null,
  manifest: {
    date: "2026-08-12",
    venues: [{
      slug: "wakamatsu",
      name: "若松",
      date: "2026-08-12",
      dataPath: "venues/wakamatsu/20260812.json",
      eventDay: finalPayload.eventDay,
      eventDayLabel: finalPayload.eventDayLabel,
    }],
  },
  async fetchJson(dataPath) {
    fetchCount += 1;
    assert.equal(dataPath, "venues/wakamatsu/20260812.json");
    return structuredClone(finalPayload);
  },
  async loadLiveRace() {
    liveLoadCount += 1;
  },
  renderPane() {
    renderCount += 1;
    renderedBadge = context.currentPayload.preds["3"].predictionStage.badge;
  },
  setInterval(callback, milliseconds) {
    assert.equal(milliseconds, 4 * 60 * 1000);
    intervalCallback = callback;
    return 1;
  },
  clearInterval() {},
  document: { hidden: false },
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
  assert.equal(context.currentPayload.races[2].prediction.phase, "pre");
  context.startLiveRefreshForTest();
  assert.equal(typeof intervalCallback, "function");

  // A second tick while the first one is awaiting must not start a duplicate refresh.
  await Promise.all([intervalCallback(), intervalCallback()]);

  const refreshedRace = context.currentPayload.races[2];
  assert.equal(refreshedRace.predictionFinal.phase, "final");
  assert.equal(refreshedRace.predictionFinal.finalPredictionStatus, "complete");
  assert.equal(refreshedRace.prediction.phase, "final");
  assert.equal(context.currentPayload.preds["3"].predictionStage.badge, "本予想");
  assert.ok(refreshedRace.predictionPre, "predictionPre must be retained");
  assert.equal(context.currentRaceNo, 3, "the selected race must be retained");
  assert.equal(context.currentPane, "prediction", "the selected pane must be retained");
  assert.equal(fetchCount, 1, "overlapping timer ticks must be coalesced");
  assert.equal(liveLoadCount, 1);
  assert.equal(renderCount, 1, "the pane must render after the venue JSON refresh");
  assert.equal(renderedBadge, "本予想", "renderPane must see the final prediction");
  assert.equal(syncState.textContent, "LIVE JSON");

  console.log("Wakamatsu live final refresh test passed with 2026-08-12 data");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

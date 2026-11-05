const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appSource = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const start = appSource.indexOf("function hasCompletedFinalPrediction");
const end = appSource.indexOf("async function refreshSiteBuildIfStale");
assert.ok(start >= 0 && end > start, "Kiryu venue refresh helpers must exist");

const flyTickets = Array.from({ length: 10 }, (_, index) => ({
  combination: `2-1-${(index % 4) + 3}`,
  probability: index + 0.5,
}));
const preliminary = {
  predictionStage: "morning",
  flyPrediction: {
    status: "morning",
    modelVersion: "kiryu_independent_6plus4_frozen_20261104",
    tickets: flyTickets,
  },
};
const final = {
  predictionStage: "live",
  flyPrediction: {
    status: "live",
    modelVersion: "kiryu_independent_6plus4_frozen_20261104",
    tickets: flyTickets,
  },
};
const races = Array.from({ length: 12 }, (_, index) => ({
  race: index + 1,
  racers: Array.from({ length: 6 }, (_, lane) => ({ lane: lane + 1 })),
  predictionPre: structuredClone(preliminary),
  prediction: structuredClone(preliminary),
}));
const initialPayload = {
  date: "2026-11-05",
  races: structuredClone(races),
  preds: Object.fromEntries(races.map((race) => [String(race.race), structuredClone(preliminary)])),
};
const finalPayload = structuredClone(initialPayload);
finalPayload.races[0].prediction = structuredClone(final);
finalPayload.races[0].predictionFinal = structuredClone(final);
finalPayload.preds["1"] = structuredClone(final);

const context = {
  currentVenueSlug: "kiryu",
  currentPayload: initialPayload,
  manifest: {
    date: "2026-11-05",
    venues: [{
      slug: "kiryu",
      name: "桐生",
      date: "2026-11-05",
      dataPath: "venues/kiryu/20261105.json",
    }],
  },
  structuredClone,
  async fetchJson(pathname) {
    assert.equal(pathname, "venues/kiryu/20261105.json");
    return structuredClone(finalPayload);
  },
  prepareDeadlineTides() {},
  isVerifiedTokonameFinalPrediction() { return false; },
};
vm.createContext(context);
vm.runInContext(
  `${appSource.slice(start, end)}
   globalThis.refreshKiryuVenuePayloadForTest = refreshWakamatsuVenuePayload;`,
  context,
);

(async () => {
  assert.equal(await context.refreshKiryuVenuePayloadForTest(), true);
  assert.equal(context.currentPayload.preds["1"].predictionStage, "live");
  assert.equal(context.currentPayload.races[0].predictionFinal.flyPrediction.tickets.length, 10);
  assert.equal(context.currentPayload.races[0].predictionPre.flyPrediction.tickets.length, 10);
  console.log("Kiryu LIVE final refresh and fly ticket retention tests passed");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

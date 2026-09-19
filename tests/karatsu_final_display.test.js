const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appSource = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const element = () => ({
  addEventListener() {},
  classList: { add() {}, remove() {}, toggle() {} },
  dataset: {},
  insertAdjacentHTML() {},
  style: {},
});
const elements = new Map();
const context = {
  console,
  URLSearchParams,
  setInterval: () => 1,
  clearInterval() {},
  setTimeout,
  fetch: async () => ({ ok: true, json: async () => ({ date: "2026-09-19", venues: [] }) }),
  history: { replaceState() {} },
  location: { pathname: "/", search: "", hash: "" },
  document: {
    hidden: false,
    getElementById(id) {
      if (!elements.has(id)) elements.set(id, element());
      return elements.get(id);
    },
    querySelectorAll: () => [],
  },
  window: {
    matchMedia: () => ({ matches: true }),
    getComputedStyle: () => ({ overflowX: "visible" }),
  },
};
context.window.window = context.window;
vm.createContext(context);
vm.runInContext(`${appSource}
globalThis.setDisplayState = (venue, payload, raceNo) => {
  currentVenueSlug = venue;
  currentPayload = payload;
  currentRaceNo = raceNo;
  currentPredictionAvailable = true;
};
globalThis.predForTest = pred;
globalThis.renderPredictionForTest = renderPrediction;
globalThis.renderRealtimeForTest = renderRealtime;`, context);

const probabilities = (offset = 0) => Object.fromEntries(
  [1,2,3,4,5,6].map((lane) => [String(lane), 10 + lane + offset]),
);
const live = {
  exhibition: {
    entries: [1,2,3,4,5,6].map((lane) => ({
      lane,
      exhibition_course: lane,
      exhibition_time: 6.7 + lane / 100,
      start_raw: lane === 1 ? "F.01" : `0.0${lane}`,
      start_time: lane / 100,
      tilt: 0,
    })),
    slit_source: [1,2,3,4,5,6].map((lane) => ({ lane, course: lane, start_raw: `0.0${lane}` })),
  },
  original: {
    entries: [1,2,3,4,5,6].map((lane) => ({
      lane,
      lap_time: 37 + lane / 10,
      turn_time: 5 + lane / 10,
      straight_time: 7 + lane / 10,
      sum_exhibition: 6.7 + lane / 100,
      sum: (44 + lane / 10).toFixed(2),
      sum_difference: (lane / 100).toFixed(2),
    })),
  },
};
const races = [1,2,3,4,5,6].map((race) => ({
  race,
  live: race <= 5 ? structuredClone(live) : {},
  predictionPre: { probabilities: { win: probabilities(), second: probabilities(1), third: probabilities(2) } },
  prediction: { probabilities: { win: probabilities(), second: probabilities(1), third: probabilities(2) } },
  ...(race <= 5 ? {
    predictionFinal: {
      status: "complete",
      win: probabilities(5),
      second: probabilities(6),
      third: probabilities(7),
      ai: [{ combo: "1-2-3", role: "本線" }],
      aiUpset: [{ combo: "2-1-3", role: "荒れ" }],
      predictionStage: { code: "final", label: "本予想" },
    },
  } : {}),
}));
const payload = {
  venue: "唐津",
  date: "2026-09-19",
  races,
  preds: Object.fromEntries(races.map((race) => [String(race.race), {
    win: probabilities(), second: probabilities(1), third: probabilities(2), ai: [], aiUpset: [],
  }])),
};

for (let raceNo = 1; raceNo <= 5; raceNo += 1) {
  context.setDisplayState("karatsu", payload, raceNo);
  const prediction = context.predForTest();
  const predictionHtml = context.renderPredictionForTest();
  const realtimeHtml = context.renderRealtimeForTest();
  assert.equal(prediction.status, "complete");
  assert.equal(prediction.probabilityReviewStatus, "reviewed");
  assert.equal(prediction.probabilityReview["1"].deltaWin, 5);
  assert.match(predictionHtml, /本予想/);
  assert.match(predictionHtml, /修正前 11\.0%/);
  assert.match(predictionHtml, /\+5\.0/);
  assert.doesNotMatch(predictionHtml, /現在は前データでの仮予想です/);
  assert.match(realtimeHtml, /6\.71/);
  assert.match(realtimeHtml, /スリット隊形/);
  assert.match(realtimeHtml, /37\.1/);
  assert.match(realtimeHtml, /0\.01/);
}

context.setDisplayState("karatsu", payload, 6);
assert.match(context.renderPredictionForTest(), /現在は前データでの仮予想です/);
assert.match(context.renderPredictionForTest(), /修正前 -/);

context.setDisplayState("omura", payload, 1);
const otherVenuePrediction = context.predForTest();
assert.equal(otherVenuePrediction.status, undefined);
assert.equal(otherVenuePrediction.probabilityReviewStatus, undefined);
assert.match(context.renderPredictionForTest(), /現在は前データでの仮予想です/);

console.log("Karatsu final display tests passed");

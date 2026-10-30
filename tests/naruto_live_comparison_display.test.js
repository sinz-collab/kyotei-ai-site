const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appSource = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const scoresSource = fs.readFileSync(path.join(__dirname, "..", "scores.js"), "utf8");
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
  fetch: async () => ({ ok: true, json: async () => ({ date: "2026-10-30", venues: [] }) }),
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
vm.runInContext(scoresSource, context);
vm.runInContext(`${appSource}
globalThis.setDisplayState = (payload) => {
  currentVenueSlug = "naruto";
  currentPayload = payload;
  currentRaceNo = 4;
  currentPredictionAvailable = true;
};
globalThis.predForTest = pred;
globalThis.renderPredictionForTest = renderPrediction;`, context);

const probabilities = (values) => Object.fromEntries(values.map((value, index) => [String(index + 1), value]));
const morning = {
  phase: "preliminary",
  predictionStage: "morning",
  modelVersion: "naruto_morning_independent_v1_fixed_20261020",
  win: probabilities([47.5, 16.7, 8.3, 23.9, 1.7, 1.9]),
  second: probabilities([20.9, 33.0, 12.0, 26.0, 2.1, 6.0]),
  third: probabilities([13.6, 21.6, 17.1, 21.9, 5.3, 20.5]),
};
const live = {
  phase: "final",
  predictionStage: "live",
  modelVersion: "naruto_v5_live_alpha050_6211_fixed_20261020",
  win: probabilities([53.0, 18.3, 5.8, 21.7, 0.4, 0.9]),
  second: probabilities([16.9, 27.9, 18.5, 24.4, 3.3, 9.0]),
  third: probabilities([11.0, 19.8, 22.5, 21.8, 10.2, 14.7]),
};
const input = {
  liveEntries: [1,2,3,4,5,6].map((lane) => ({
    lane,
    exhibition_st: lane / 100,
    exhibition_course: lane,
    exhibition_time: 6.7 + lane / 100,
    lap_time: 36 + lane / 10,
    turn_time: 5 + lane / 10,
    straight_time: 7 + lane / 10,
  })),
  windSpeedMps: 2,
  waveHeightCm: 2,
};
const final = {
  ...live,
  active_prediction_stage: "live",
  prediction_history: {
    morning: [{ stage: "morning", prediction: structuredClone(morning), input: {} }],
    live: [{ stage: "live", prediction: structuredClone(live), input: structuredClone(input) }],
  },
  inputSnapshot: structuredClone(input),
  ai: [],
  aiUpset: [],
};
const payload = {
  venueId: "naruto",
  venue: "鳴門",
  date: "2026-10-30",
  races: [{ race: 4, predictionPre: structuredClone(morning), prediction: structuredClone(final) }],
  preds: { "4": structuredClone(final) },
};

context.setDisplayState(payload);
const prediction = context.predForTest();
const html = context.renderPredictionForTest();
assert.equal(prediction.probabilityReviewStatus, "reviewed");
assert.equal(prediction.probabilityFlow.realtimeApplied, true);
assert.equal(prediction.probabilityReview["1"].morningWin, 47.5);
assert.equal(prediction.probabilityReview["1"].win, 53.0);
assert.equal(prediction.probabilityReview["1"].deltaWin, 5.5);
assert.match(html, /展示・スリット・直前反映/);
assert.match(html, /再精査後の調整数字/);
assert.match(html, /修正前 47\.5%/);
assert.match(html, /\+5\.5/);
assert.match(html, /再精査した修正後/);
assert.doesNotMatch(html, /修正前データなし|比較データは未収録/);

const unverified = structuredClone(payload);
unverified.preds["4"].prediction_history.live = [];
unverified.races[0].prediction.prediction_history.live = [];
context.setDisplayState(unverified);
const unverifiedHtml = context.renderPredictionForTest();
assert.match(unverifiedHtml, /再精査成功情報は確認できていません/);
assert.doesNotMatch(unverifiedHtml, /再精査は成功しています|再精査した修正後/);

if (process.env.NARUTO_PAYLOAD) {
  const published = JSON.parse(fs.readFileSync(process.env.NARUTO_PAYLOAD, "utf8"));
  context.setDisplayState(published);
  const publishedPrediction = context.predForTest();
  const publishedHtml = context.renderPredictionForTest();
  assert.equal(publishedPrediction.probabilityReviewStatus, "reviewed");
  assert.match(publishedHtml, /修正前 47\.5%/);
  assert.doesNotMatch(publishedHtml, /修正前データなし|比較データは未収録/);
}

console.log("Naruto live comparison display tests passed");

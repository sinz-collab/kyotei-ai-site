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
  fetch: async () => ({ ok: true, json: async () => ({ date: "2026-11-13", venues: [] }) }),
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
globalThis.setDisplayState = (payload, raceNo, mode = "ai") => {
  currentVenueSlug = "karatsu";
  currentPayload = payload;
  currentRaceNo = raceNo;
  currentPredictionAvailable = true;
  ticketMode = mode;
};
globalThis.renderPredictionForTest = renderPrediction;`, context);

const ticket = (combo, probability) => ({ combo, role: "買い目", probability });
const normal = [
  ticket("1-2-3", 10), ticket("1-3-2", 9), ticket("2-1-3", 8), ticket("2-3-1", 7),
  ticket("3-1-2", 6), ticket("3-2-1", 5), ticket("4-1-2", 4), ticket("4-2-1", 3),
  ticket("5-1-2", 2), ticket("6-1-2", 1), ticket("1-2-3", 0.5),
];
const fly = [
  ticket("2-1-3", 12), ticket("3-1-2", 11), ticket("2-3-1", 10), ticket("3-2-1", 9),
  ticket("4-1-2", 8), ticket("4-2-1", 7), ticket("5-1-2", 6), ticket("5-2-1", 5),
  ticket("6-1-2", 4), ticket("6-2-1", 3), ticket("2-1-3", 2),
];
const v13 = {
  status: "complete",
  engine: "karatsu_scenario_engine_v1_2",
  engineVersion: "1.3.0",
  normalTickets: normal,
  ai: [ticket("9-9-9", 99)],
  aiUpset: [ticket("8-8-8", 88)],
  lane1FlyProbability: 50.7012,
  flyPrediction: {
    status: "complete",
    modelVersion: "karatsu_lane1_fly_v1",
    probability: 50.7012,
    tickets: fly,
  },
};
const v12 = {
  status: "complete",
  engine: "karatsu_scenario_engine_v1_2",
  engineVersion: "1.2.0",
  ai: [ticket("1-2-3", 10)],
  aiUpset: [ticket("2-1-3", 9)],
};
const payload = {
  venueId: "karatsu",
  venue: "唐津",
  date: "2026-11-13",
  races: [
    { race: 1, predictionFinal: v12 },
    { race: 5, prediction: v13, odds: {} },
    { race: 6, prediction: { ...v13, lane1FlyProbability: 43.1559, flyPrediction: { ...v13.flyPrediction, probability: 43.1559 } }, odds: {} },
  ],
};

context.setDisplayState(payload, 5, "ai");
const normalHtml = context.renderPredictionForTest();
assert.match(normalHtml, /AI買い目<span>10点<\/span>/);
assert.match(normalHtml, /1号艇飛び買い目<span>10点<\/span>/);
assert.match(normalHtml, /50\.7012%/);
assert.equal((normalHtml.match(/class="ticket"/g) || []).length, 10);
assert.match(normalHtml, /1-2-3/);
assert.doesNotMatch(normalHtml, /9-9-9/);

context.setDisplayState(payload, 5, "aiUpset");
const flyHtml = context.renderPredictionForTest();
assert.equal((flyHtml.match(/class="ticket"/g) || []).length, 10);
assert.match(flyHtml, /2-1-3/);
assert.doesNotMatch(flyHtml, /8-8-8/);

context.setDisplayState(payload, 6, "aiUpset");
assert.match(context.renderPredictionForTest(), /43\.1559%/);

context.setDisplayState(payload, 1, "ai");
const legacyHtml = context.renderPredictionForTest();
assert.doesNotMatch(legacyHtml, /1号艇飛び買い目/);
assert.match(legacyHtml, /AI荒れ予想/);
assert.match(legacyHtml, /1-2-3/);

console.log("Karatsu v1.3 normal/fly tabs and v1.2 protection passed");

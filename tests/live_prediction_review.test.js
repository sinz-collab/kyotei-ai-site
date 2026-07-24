const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");

const appSource = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const start = appSource.indexOf("function normalizeProbabilityMap");
const end = appSource.indexOf("async function loadLiveRace");
assert.ok(start >= 0 && end > start);

const context = {
  num(value, fallback = 0) {
    const parsed = Number(String(value ?? "").replace(/[^\d.\-]/g, ""));
    return Number.isFinite(parsed) ? parsed : fallback;
  },
};
vm.createContext(context);
vm.runInContext(
  `${appSource.slice(start, end)}
   globalThis.applyLivePredictionReviewForTest = applyLivePredictionReview;`,
  context,
);

function rows(key, values) {
  return values.map((value, index) => ({ lane: index + 1, [key]: value }));
}

function document(type, data, complete = true) {
  return {
    status: complete ? "complete" : "pending",
    complete,
    fetched_at: "2026-07-24T15:47:40+09:00",
    data: type === "odds" ? { odds: data } : { [type]: data },
  };
}

function prediction() {
  return {
    win: { 1: 30, 2: 20, 3: 16, 4: 14, 5: 11, 6: 9 },
    second: { 1: 20, 2: 22, 3: 18, 4: 16, 5: 13, 6: 11 },
    third: { 1: 16, 2: 18, 3: 19, 4: 18, 5: 16, 6: 13 },
  };
}

function completeDocuments(oddsValue = 10) {
  const odds = {};
  for (let first = 1; first <= 6; first += 1) {
    for (let second = 1; second <= 6; second += 1) {
      for (let third = 1; third <= 6; third += 1) {
        if (first !== second && first !== third && second !== third) {
          odds[`${first}-${second}-${third}`] = oddsValue;
        }
      }
    }
  }
  return {
    direct: document("racers", rows("weight_adjustment", [0, 0, 0, 0, 0, 0])),
    exhibition: document("entries", rows("exhibition_time", [6.7, 6.8, 6.75, 6.9, 6.85, 6.95])
      .map((row) => ({ ...row, exhibition_course: row.lane, start_time: 0.1 }))),
    original_exhibition: document("entries", [], false),
    odds: document("odds", odds),
  };
}

const reviewed = prediction();
assert.equal(context.applyLivePredictionReviewForTest(reviewed, completeDocuments()), true);
assert.equal(reviewed.probabilityReviewStatus, "reviewed");
assert.equal(reviewed.liveReviewMeta.oddsUsedForProbability, false);
assert.equal(reviewed.liveReviewMeta.exhibitionStartUsedAlone, false);
for (const key of ["win", "second", "third"]) {
  const total = Object.values(reviewed[key]).reduce((sum, value) => sum + value, 0);
  assert.ok(Math.abs(total - 100) < 0.001);
}

const changedOdds = prediction();
assert.equal(context.applyLivePredictionReviewForTest(changedOdds, completeDocuments(99.9)), true);
assert.deepEqual(changedOdds.win, reviewed.win);
assert.deepEqual(changedOdds.second, reviewed.second);
assert.deepEqual(changedOdds.third, reviewed.third);

const missingOdds = completeDocuments();
delete missingOdds.odds.data.odds["1-2-3"];
const pending = prediction();
const before = JSON.stringify(pending);
assert.equal(context.applyLivePredictionReviewForTest(pending, missingOdds), false);
assert.equal(JSON.stringify(pending), before);

const startOnlyChanged = completeDocuments();
startOnlyChanged.exhibition.data.entries.forEach((row, index) => {
  row.start_time = index === 0 ? -0.1 : 0.3;
});
const startPrediction = prediction();
context.applyLivePredictionReviewForTest(startPrediction, startOnlyChanged);
assert.deepEqual(startPrediction.win, reviewed.win);

console.log("live prediction review tests passed");

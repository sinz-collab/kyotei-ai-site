const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");

const appSource = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const start = appSource.indexOf("function completeSixLaneRows");
const end = appSource.indexOf("async function loadLiveRace");
assert.ok(start >= 0 && end > start);

const context = {
  firstValue: (...values) => values.find((value) => value !== undefined && value !== null && value !== ""),
  num(value, fallback = 0) {
    const parsed = Number(String(value ?? "").replace(/[^\d.\-]/g, ""));
    return Number.isFinite(parsed) ? parsed : fallback;
  },
};
vm.createContext(context);
vm.runInContext(
  `${appSource.slice(start, end)}
   globalThis.normalizedExhibitionTimeForTest = normalizedExhibitionTime;
   globalThis.mergeOriginalExhibitionRowsForTest = mergeOriginalExhibitionRows;
   globalThis.completeOriginalExhibitionRowsForTest = completeOriginalExhibitionRows;`,
  context,
);

assert.equal(context.normalizedExhibitionTimeForTest("6.72"), 6.72);
for (const value of ["-", "", null, 0, 4.99, 10, 99]) {
  assert.equal(context.normalizedExhibitionTimeForTest(value), null);
}

const exhibitions = [6.79, 6.78, 6.77, 6.90, 6.86, 6.68].map((value, index) => ({
  lane: index + 1,
  exhibition_time: String(value),
  exhibition_rank: [4, 3, 2, 6, 5, 1][index],
  exhibition_gap: [0.11, 0.10, 0.09, 0.22, 0.18, 0][index],
}));
const originals = [36.78, 37.21, 37.81, 37.38, 37.82, 37.71].map((value, index) => ({
  lane: index + 1,
  lap_time: value,
  turn_time: 7.5 + index / 10,
  straight_time: 7.7 + index / 100,
}));
assert.equal(
  context.completeOriginalExhibitionRowsForTest({
    status: "complete",
    complete: true,
    data: { entries: originals },
  }).length,
  6,
);
assert.equal(
  context.completeOriginalExhibitionRowsForTest({
    status: "pending",
    complete: false,
    data: { entries: [] },
  }),
  null,
);
assert.equal(
  context.completeOriginalExhibitionRowsForTest({
    status: "complete",
    complete: true,
    data: { entries: exhibitions },
  }),
  null,
  "normal exhibition rows must not count as original exhibition",
);
const existing = {
  1: { protected_original_field: "keep" },
};
const merged = context.mergeOriginalExhibitionRowsForTest(existing, originals, exhibitions);

assert.deepEqual(
  Object.values(merged).map((row) => row.exhibition_time),
  [6.79, 6.78, 6.77, 6.9, 6.86, 6.68],
);
assert.deepEqual(
  Object.values(merged).map((row) => row.sum),
  [43.57, 43.99, 44.58, 44.28, 44.68, 44.39],
);
assert.deepEqual(
  Object.values(merged).map((row) => row.sum_diff),
  ["0.68", "0.26", "-0.33", "-0.03", "-0.43", "-0.14"],
);
assert.equal(merged["1"].protected_original_field, "keep");
assert.equal(merged["1"].turn, 7.5);
assert.equal(merged["1"].line, 7.7);

const preserved = context.mergeOriginalExhibitionRowsForTest(
  { 1: { lap: 36.78, show: 6.79, sum: 43.57, sum_diff: "0.00" } },
  [],
  [{ lane: 1, exhibition_time: "-" }],
);
assert.equal(preserved["1"].exhibition_time, 6.79);
assert.equal(preserved["1"].sum, 43.57);

console.log("exhibition display tests passed");

const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");

const appSource = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const start = appSource.indexOf("function completeSixLaneRows");
const end = appSource.indexOf("async function loadLiveRace");
assert.ok(start >= 0 && end > start);
const formatStart = appSource.indexOf("function formatKiryuExhibitionValue");
const formatEnd = appSource.indexOf("function exhibitionCell", formatStart);
assert.ok(formatStart >= 0 && formatEnd > formatStart);

const context = {
  currentVenueSlug: "heiwajima",
  firstValue: (...values) => values.find((value) => value !== undefined && value !== null && value !== ""),
  num(value, fallback = 0) {
    const parsed = Number(String(value ?? "").replace(/[^\d.\-]/g, ""));
    return Number.isFinite(parsed) ? parsed : fallback;
  },
};
vm.createContext(context);
vm.runInContext(
  `${appSource.slice(start, end)}
   ${appSource.slice(formatStart, formatEnd)}
   globalThis.normalizedExhibitionTimeForTest = normalizedExhibitionTime;
   globalThis.mergeOriginalExhibitionRowsForTest = mergeOriginalExhibitionRows;
   globalThis.completeOriginalExhibitionRowsForTest = completeOriginalExhibitionRows;
   globalThis.formatKiryuExhibitionValueForTest = formatKiryuExhibitionValue;`,
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

context.currentVenueSlug = "kiryu";
const kiryuOriginals = [18.22, 18.46, 18.69, 18.53, 18.70, 18.69].map((value, index) => ({
  lane: index + 1,
  half_lap_time: value,
  turn_time: 4.5 + index / 100,
  straight_time: 7.5 + index / 100,
  sum: 99,
}));
const kiryuExhibitions = [6.75, 6.85, 6.83, 6.81, 6.82, 6.66].map((value, index) => ({
  lane: index + 1,
  exhibition_time: value,
}));
const kiryuMerged = context.mergeOriginalExhibitionRowsForTest({}, kiryuOriginals, kiryuExhibitions);
assert.deepEqual(
  Object.values(kiryuMerged).map((row) => context.formatKiryuExhibitionValueForTest(row.sum)),
  ["24.97", "25.31", "25.52", "25.34", "25.52", "25.35"],
  "Kiryu sum must be half-lap plus exhibition without doubling or using a source sum",
);
assert.deepEqual(
  Object.values(kiryuMerged).map((row) => context.formatKiryuExhibitionValueForTest(row.sum_diff, true)),
  ["-0.37", "-0.03", "+0.19", "+0.01", "+0.19", "+0.02"],
  "Kiryu difference must be sum minus the unrounded six-lane average",
);

const precisionExhibitions = kiryuExhibitions.map((row) => ({ ...row }));
precisionExhibitions[0].exhibition_time = 6.754;
const precisionMerged = context.mergeOriginalExhibitionRowsForTest({}, kiryuOriginals, precisionExhibitions);
assert.equal(precisionMerged["1"].sum, 18.22 + 6.754, "Kiryu calculation must retain source precision");

const kiryuMissing = kiryuOriginals.map((row) => ({ ...row }));
kiryuMissing[4].half_lap_time = null;
const kiryuMissingMerged = context.mergeOriginalExhibitionRowsForTest({}, kiryuMissing, kiryuExhibitions);
assert.equal(context.formatKiryuExhibitionValueForTest(kiryuMissingMerged["5"].sum), "—");
assert.deepEqual(
  Object.values(kiryuMissingMerged).map((row) => context.formatKiryuExhibitionValueForTest(row.sum_diff, true)),
  ["—", "—", "—", "—", "—", "—"],
  "Kiryu differences must be unavailable unless all six sums exist",
);

console.log("exhibition display tests passed");

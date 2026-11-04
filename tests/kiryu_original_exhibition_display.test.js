const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8").replace(/\r\n?/g, "\n");
const start = source.indexOf("function completeSixLaneRows");
const end = source.indexOf("function rankRows", start);
assert.ok(start >= 0 && end > start);

const context = {
  currentVenueSlug: "kiryu",
  firstValue: (...values) => values.find((value) => value !== undefined && value !== null && value !== ""),
  num(value, fallback = 0) {
    const parsed = Number(String(value ?? "").replace(/[^\d.\-]/g, ""));
    return Number.isFinite(parsed) ? parsed : fallback;
  },
  exhibitionTimeFromRow: () => null,
  positiveNumber(value) {
    if (value === undefined || value === null || value === "" || value === "-") return null;
    const parsed = Number(String(value).trim());
    return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
  },
};
vm.createContext(context);
vm.runInContext(
  `${source.slice(start, end)}
   globalThis.completeOriginalForTest = completeOriginalExhibitionRows;
   globalThis.hasOriginalForTest = hasDisplayableOriginalExhibition;`,
  context,
);

const entries = [
  { lane: 1, half_lap_time: 18.22, turn_time: 4.54, straight_time: 7.54 },
  { lane: 2, half_lap_time: 18.46, turn_time: 4.36, straight_time: 7.54 },
  { lane: 3, half_lap_time: 18.69, turn_time: null, straight_time: 7.58 },
  { lane: 4, half_lap_time: 18.53, turn_time: 4.82, straight_time: null },
  { lane: 5, half_lap_time: null, turn_time: 4.68, straight_time: 7.54 },
  { lane: 6, half_lap_time: 18.69, turn_time: 4.67, straight_time: 7.68 },
];
const partial = context.completeOriginalForTest({
  status: "partial",
  complete: false,
  data: { entries },
});
assert.equal(partial.length, 6, "Kiryu must retain rows with individually missing metrics");

const original = Object.fromEntries(entries.map((row) => [String(row.lane), row]));
assert.equal(context.hasOriginalForTest(original, true, null), true);
assert.match(source, /currentVenueSlug === "kiryu" \? "半周タイム" : "1周"/);
assert.match(source, /half_lap_time/);
assert.doesNotMatch(source, /half_lap_time\s*\*\s*2/);

context.currentVenueSlug = "heiwajima";
assert.equal(
  context.completeOriginalForTest({ status: "partial", complete: false, data: { entries } }),
  null,
  "Other venues must keep their existing complete-document rule",
);

console.log("Kiryu original exhibition display checks passed");

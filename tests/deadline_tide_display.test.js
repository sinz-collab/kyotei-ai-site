const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(__dirname, "..", "styles.css"), "utf8");
const helperStart = source.indexOf("function tideMinutes");
const helperEnd = source.indexOf("function tideSvg", helperStart);
assert.ok(helperStart >= 0 && helperEnd > helperStart);

const context = {};
vm.createContext(context);
vm.runInContext(
  `${source.slice(helperStart, helperEnd)};
   globalThis.deadlineTideInfoForTest = deadlineTideInfo;
   globalThis.prepareDeadlineTidesForTest = prepareDeadlineTides;
   globalThis.deadlineTideForRaceForTest = deadlineTideForRace;`,
  context,
);

const tideInfo = context.deadlineTideInfoForTest;
const events = [
  { type: "満潮", time: "01:39", level: 140 },
  { type: "干潮", time: "08:59", level: 76 },
  { type: "満潮", time: "14:59", level: 104 },
  { type: "干潮", time: "19:40", level: 87 },
];

const falling = tideInfo("15:23", events);
assert.equal(falling.available, true);
assert.equal(falling.level, 102.5);
assert.equal(falling.phase, "falling");
assert.equal(falling.phaseLabel, "下げ潮");
assert.equal(falling.arrow, "↓");
assert.equal(falling.turning, "満潮付近");

const rising = tideInfo("10:59", events);
assert.equal(rising.available, true);
assert.equal(rising.level, 85.3);
assert.equal(rising.phase, "rising");
assert.equal(rising.phaseLabel, "上げ潮");
assert.equal(rising.arrow, "↑");
assert.equal(rising.turning, "");

const turningPoint = tideInfo("19:40", events);
assert.equal(turningPoint.level, 87);
assert.equal(turningPoint.phase, "rising");
assert.equal(turningPoint.turning, "干潮付近");

for (const unavailable of [
  tideInfo("20:38", events),
  tideInfo("15:23", events.slice(0, 1)),
  tideInfo("15:23", events.map((event, index) => index === 2 ? { ...event, level: null } : event)),
  tideInfo("", events),
]) {
  assert.equal(unavailable.available, false);
}

const races = Array.from({ length: 12 }, (_, index) => ({
  race: index + 1,
  deadline: `${String(9 + Math.floor(index / 2)).padStart(2, "0")}:${index % 2 ? "30" : "00"}`,
}));
const payload = { tide: { events }, races };
context.prepareDeadlineTidesForTest(payload);
assert.equal(payload._deadlineTides.size, 12);
assert.equal(Object.keys(payload).includes("_deadlineTides"), false);

const before = context.deadlineTideForRaceForTest(payload, races[4]);
races[4].deadline = "11:15";
const after = context.deadlineTideForRaceForTest(payload, races[4]);
assert.notEqual(after.level, before.level);
assert.equal(payload._deadlineTides.get(5).deadline, "11:15");

for (const venue of ["ashiya", "shimonoseki", "toda", "wakamatsu", "tokoname", "omura", "karatsu", "fukuoka", "heiwajima"]) {
  assert.match(source, new RegExp(`"${venue}"`));
}
assert.match(source, /DEADLINE_TIDE_VENUES\.has\(currentVenueSlug\) \? renderDeadlineTide\(race\(\)\) : ""/);
assert.match(source, /const level = info\.available \? `\$\{esc\(info\.level\)\} cm` : "—"/);
assert.match(styles, /grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/);
assert.match(styles, /\.tide-movement\.rising\{color:#dc2626\}/);
assert.match(styles, /\.tide-movement\.falling\{color:#2563eb\}/);

console.log("Deadline tide display tests passed");

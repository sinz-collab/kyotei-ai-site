const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const helperStart = source.indexOf("function tideMinutes");
const helperEnd = source.indexOf("function tideSvg", helperStart);
assert.ok(helperStart >= 0 && helperEnd > helperStart);

const context = {};
vm.createContext(context);
vm.runInContext(
  `${source.slice(helperStart, helperEnd)}; globalThis.tideInfoForTest = wakamatsuDeadlineTideInfo;`,
  context,
);

const tideInfo = context.tideInfoForTest;
const events = [
  { type: "満潮", time: "01:39", level: 140 },
  { type: "干潮", time: "08:59", level: 76 },
  { type: "満潮", time: "14:59", level: 104 },
  { type: "干潮", time: "19:40", level: 87 },
];
const info = tideInfo("15:23", events, {}, {
  tide_type: "小潮",
  tide_phase: "falling",
  tide_zone: "mid",
  time_band: "昼/序盤",
});
assert.equal(info.available, true);
assert.equal(info.level, 102.5);
assert.equal(info.phase, "下げ潮");
assert.equal(info.differenceText, "満潮 14:59から24分");
assert.equal(info.judgment, "小潮 / 下げ潮 / 中盤 / 昼/序盤");

const turningPoint = tideInfo("19:40", events, { phase: "上げ", zone: "干潮前後90分" }, {});
assert.equal(turningPoint.available, true);
assert.equal(turningPoint.level, 87);
assert.equal(turningPoint.phase, "上げ潮");
assert.equal(turningPoint.differenceText, "干潮 19:40（同時刻）");
assert.equal(turningPoint.judgment, "上げ / 干潮前後90分");

for (const unavailable of [
  tideInfo("20:38", events, {}, {}),
  tideInfo("15:23", events.slice(0, 1), {}, {}),
  tideInfo("15:23", events.map((event, index) => index === 2 ? { ...event, level: null } : event), {}, {}),
  tideInfo("", events, {}, {}),
]) {
  assert.equal(unavailable.available, false);
}

console.log("Wakamatsu deadline tide tests passed");

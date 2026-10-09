const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const app = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const css = fs.readFileSync(path.join(__dirname, "..", "styles.css"), "utf8");

assert.match(app, /flyPrediction: source\.flyPrediction/);
assert.match(app, /currentPayload\?\.venueId === "toda" && p\.flyPrediction\?\.status === "final"/);
assert.match(app, /todaFly\?\.isFly && Array\.isArray\(todaFly\.tickets\)/);
assert.match(app, /1号艇飛び確率/);
assert.match(app, /飛び判定/);
assert.match(app, /飛び専用10点/);
assert.match(app, /通常AI買い目とは別枠/);
assert.match(css, /@media\(max-width:390px\)/);
assert.match(css, /\.toda-fly-tickets/);

const helperStart = app.indexOf("function predictionTicketsForDisplay");
const helperEnd = app.indexOf("function renderLogs", helperStart);
assert.ok(helperStart >= 0 && helperEnd > helperStart);
const context = {};
vm.createContext(context);
vm.runInContext(
  `${app.slice(helperStart, helperEnd)}; globalThis.predictionTicketsForDisplayForTest = predictionTicketsForDisplay;`,
  context,
);

const regular = [
  { combo: "2-1-3", role: "本線" },
  { combo: "2-3-4", role: "本線" },
];
const upset = [{ combo: "2-1-3", role: "AI荒れ" }];
const fly = [{ combo: "2-1-3", role: "Main HEAD" }];
const display = context.predictionTicketsForDisplayForTest;

assert.deepEqual(Array.from(display({ ai: regular, aiUpset: upset }, "ai", fly, "toda")), [regular[1]]);
assert.deepEqual(Array.from(display({ ai: regular, aiUpset: upset }, "aiUpset", fly, "toda")), upset);
assert.deepEqual(Array.from(display({ ai: regular }, "ai", fly, "biwako")), regular);

console.log("Toda fly probability and dedicated ticket display passed");

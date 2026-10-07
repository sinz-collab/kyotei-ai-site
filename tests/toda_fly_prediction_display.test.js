const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

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

console.log("Toda fly probability and dedicated ticket display passed");

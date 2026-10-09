const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const app = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const css = fs.readFileSync(path.join(__dirname, "..", "styles.css"), "utf8");

assert.match(app, /flyPrediction: source\.flyPrediction/);
assert.match(app, /\["pre", "final"\]\.includes\(p\.flyPrediction\?\.status\)/);
assert.match(app, /Array\.isArray\(todaFly\?\.tickets\)/);
assert.match(app, /1号艇飛び確率/);
assert.match(app, /飛び優勢/);
assert.match(app, /逃げ優勢/);
assert.match(app, /飛び専用AI買い目/);
assert.match(app, /通常AI買い目とは別枠/);
assert.match(css, /@media\(max-width:390px\)/);
assert.match(css, /\.toda-fly-tickets/);
assert.match(app, /const tickets = p\[ticketMode\] \|\| \[\]/);
assert.doesNotMatch(app, /function predictionTicketsForDisplay/);

console.log("Toda fly probability and dedicated ticket display passed");

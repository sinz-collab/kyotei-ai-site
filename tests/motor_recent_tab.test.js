const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const motor = fs.readFileSync(path.join(root, "motor-recent.js"), "utf8");

const compare = index.indexOf('data-pane="compare"');
const motorPane = index.indexOf('data-pane="motor-recent"');
const realtime = index.indexOf('data-pane="realtime"');

assert.ok(compare >= 0);
assert.ok(motorPane > compare);
assert.ok(realtime > motorPane);
assert.ok(index.includes("motor-recent.css"));
assert.ok(index.includes("motor-recent.js"));
assert.ok(motor.includes("function renderMotorRecent"));
assert.ok(motor.includes("直近10走 2連"));
assert.ok(motor.includes("直近10走詳細"));

console.log("motor recent tab tests passed");

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const start = source.indexOf("function renderRaceInfoBadges");
const end = source.indexOf("function renderEntry", start);
assert.ok(start >= 0 && end > start);

const context = {
  esc: (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]),
};
vm.createContext(context);
vm.runInContext(
  `${source.slice(start, end)}; globalThis.renderRaceInfoBadgesForTest = renderRaceInfoBadges;`,
  context,
);

const render = context.renderRaceInfoBadgesForTest;
assert.match(render({ type: "一般" }), />一般</);
assert.doesNotMatch(render({ type: "一般" }), /進入固定/);
assert.match(render({ type: "優勝戦" }), />優勝戦</);
assert.match(render({ type: "一般", entryFixed: true }), />一般</);
assert.match(render({ type: "一般", entryFixed: true }), />進入固定</);
assert.doesNotMatch(render({ type: "一般", entryFixed: false }), /進入固定/);
assert.doesNotMatch(render({ type: "一般", entryFixed: 1 }), /進入固定/);
assert.equal(render({}), "");
assert.match(render({ type: '<一般>' }), /&lt;一般&gt;/);

console.log("race info badge tests passed");

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const start = source.indexOf("function renderTop()");
const end = source.indexOf("async function openVenue", start);
assert.ok(start >= 0 && end > start);

function render(eventLabel) {
  const nodes = {dateTitle: {textContent: ""}, venueGrid: {innerHTML: ""}};
  const context = {
    manifest: {
      date: "2026-09-08",
      venues: [{
        slug: "toda", name: "戸田", open: true, entryCount: 12,
        firstDeadline: "10:47", predictionStatus: "ready",
        eventDayLabel: "初日", eventLabel,
      }],
    },
    esc: String,
    $(id) { return nodes[id]; },
  };
  vm.createContext(context);
  vm.runInContext(`${source.slice(start, end)}; renderTop();`, context);
  return nodes.venueGrid.innerHTML;
}

assert.doesNotMatch(render(""), /venue-event-label/);
for (const label of ["SG", "G1", "G2", "G3", "🔰", "♥️", "G3｜♥️", "G1｜🔰"]) {
  const html = render(label);
  assert.match(html, new RegExp(`<strong class="venue-event-label">${label}</strong><span>開催</span>`));
}

console.log("event label checks passed");

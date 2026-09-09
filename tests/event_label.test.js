const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(__dirname, "..", "styles.css"), "utf8");
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
assert.match(render("SG"), /<strong class="venue-event-label"><span class="venue-event-grade sg">SG<\/span><\/strong><span>開催<\/span>/);
for (const grade of ["G1", "G2", "G3"]) {
  assert.match(render(grade), new RegExp(`<strong class="venue-event-label"><span class="venue-event-grade g">${grade}</span></strong><span>開催</span>`));
}
for (const label of ["🔰", "♥️"]) {
  assert.match(render(label), new RegExp(`<strong class="venue-event-label">${label}</strong><span>開催</span>`));
  assert.doesNotMatch(render(label), /venue-event-grade/);
}
assert.match(render("G3｜♥️"), /<span class="venue-event-grade g">G3<\/span>｜♥️<\/strong><span>開催<\/span>/);
assert.match(render("G1｜🔰"), /<span class="venue-event-grade g">G1<\/span>｜🔰<\/strong><span>開催<\/span>/);

assert.match(styles, /\.venue-event-grade\.sg\{background:#dc2626\}/);
assert.match(styles, /\.venue-event-grade\.g\{background:#ea580c\}/);
assert.match(styles, /\.venue-status\.on\{background:#1765bd;color:#fff\}/);

console.log("event label checks passed");

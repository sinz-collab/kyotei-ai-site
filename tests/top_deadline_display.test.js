const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8").replace(/\r\n?/g, "\n");
const styles = fs.readFileSync(path.join(__dirname, "..", "styles.css"), "utf8");
const start = source.indexOf("function venueScheduleState(");
const end = source.indexOf("async function openVenue", start);
assert.ok(start >= 0 && end > start);

const deadlines = Array.from({ length: 12 }, (_, index) => ({
  race: index + 1,
  deadline: `${String(10 + Math.floor(index / 2)).padStart(2, "0")}:${index % 2 ? "30" : "00"}`,
}));
const nodes = { dateTitle: { textContent: "" }, venueGrid: { innerHTML: "" } };
const context = {
  manifest: {
    date: "2026-11-02",
    venues: [{
      slug: "toda", name: "戸田", open: true, entryCount: 12,
      firstDeadline: "10:00", predictionStatus: "ready", eventDayLabel: "初日",
      deadlines,
    }],
  },
  esc: String,
  $(id) { return nodes[id]; },
};
vm.createContext(context);
vm.runInContext(`${source.slice(start, end)}; this.renderAt = renderTop;`, context);

const jst = (time) => Date.parse(`2026-11-02T${time}:00+09:00`);
context.renderAt(jst("10:31"));
assert.match(nodes.venueGrid.innerHTML, />3R 11:00</);
assert.doesNotMatch(nodes.venueGrid.innerHTML, /deadline-warning/);

context.renderAt(jst("10:55"));
assert.match(nodes.venueGrid.innerHTML, /venue deadline-warning/);
assert.match(nodes.venueGrid.innerHTML, /venue-next-race warning">3R 11:00/);
assert.doesNotMatch(nodes.venueGrid.innerHTML, /締切5分前|残り/);

context.renderAt(jst("11:00"));
assert.match(nodes.venueGrid.innerHTML, />3R 11:00</);
context.renderAt(jst("11:00") + 1);
assert.match(nodes.venueGrid.innerHTML, />4R 11:30</);

context.renderAt(jst("15:30") + 1);
assert.match(nodes.venueGrid.innerHTML, />本日終了</);

context.manifest.venues[0].deadlines = deadlines.slice(0, 11);
context.renderAt(jst("10:31"));
assert.match(nodes.venueGrid.innerHTML, /1R締切 10:00/);
assert.doesNotMatch(nodes.venueGrid.innerHTML, /venue-next-race/);

assert.match(styles, /\.venue\.deadline-warning\{[^}]*#dc2626/);
assert.match(styles, /\.venue-next-race\.warning\{color:#dc2626\}/);
assert.match(source, /30 \* 1000/);

console.log("top deadline display checks passed");

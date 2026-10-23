const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const app = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");

assert.match(
  app,
  /\["fukuoka", "wakamatsu"\]\.includes\(currentVenueSlug\)[\s\S]*?\? 60 \* 1000[\s\S]*?: 4 \* 60 \* 1000/,
  "Fukuoka and Wakamatsu live displays must refresh every minute without changing other venues",
);
const css = fs.readFileSync(path.join(__dirname, "..", "styles.css"), "utf8");

assert.match(app, /currentPayload\?\.venueId === "fukuoka"/);
assert.match(app, /\["morning", "live", "unavailable"\]\.includes\(p\.flyPrediction\?\.status\)/);
assert.match(app, /const isDedicatedFlyVenue = isTodaFly \|\| isFukuokaFly/);
assert.match(app, /dedicatedFlyTicketSets\(p\)/);
assert.match(app, /const usesFlyTicketTabs = isWakamatsuFly \|\| isDedicatedFlyVenue/);
assert.match(app, /<h2>買い目<\/h2>/);
assert.match(app, /AI買い目<span>/);
assert.match(app, /1号艇飛び買い目<span>/);
assert.match(app, /ticketMode === "ai" \? dedicatedTicketSets\.normal : dedicatedFlyTickets/);
assert.match(app, /safe\(currentTrifectaOdds\(t\.combo\)\)/);
assert.match(app, /dedicatedFly\?\.status === "unavailable"/);
assert.match(app, /進入変更または入力不足/);
assert.doesNotMatch(app, /class="toda-ticket-scroll"/);
assert.doesNotMatch(app, /class="toda-ticket-grid"/);
assert.doesNotMatch(app, /通常AI買い目（10点）/);
assert.doesNotMatch(app, /<h2>1号艇飛び専用10点/);
assert.doesNotMatch(css, /\.toda-ticket-scroll/);
assert.doesNotMatch(css, /\.toda-ticket-grid/);

const oddsStart = app.indexOf("function currentTrifectaOdds");
const oddsEnd = app.indexOf("function formatMoney", oddsStart);
assert.ok(oddsStart >= 0 && oddsEnd > oddsStart);
const oddsContext = {
  race: () => ({ odds: { "3-1-4": 12.3, 315: 45.6 } }),
  pred: () => ({ odds: {} }),
};
vm.createContext(oddsContext);
vm.runInContext(
  `${app.slice(oddsStart, oddsEnd)}; globalThis.lookup = currentTrifectaOdds;`,
  oddsContext,
);
assert.equal(oddsContext.lookup("3-1-4"), 12.3);
assert.equal(oddsContext.lookup("3-1-5"), 45.6);
assert.equal(oddsContext.lookup("2-1-4"), "-");

console.log("Fukuoka Wakamatsu-style ticket tabs and live odds display passed");

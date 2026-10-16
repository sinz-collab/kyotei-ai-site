const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const app = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");

assert.match(
  app,
  /currentVenueSlug === "fukuoka" \? 60 \* 1000 : 4 \* 60 \* 1000/,
  "Fukuoka live display must refresh every minute without changing other venues",
);
const css = fs.readFileSync(path.join(__dirname, "..", "styles.css"), "utf8");

assert.match(app, /currentPayload\?\.venueId === "fukuoka"/);
assert.match(app, /\["morning", "live", "unavailable"\]\.includes\(p\.flyPrediction\?\.status\)/);
assert.match(app, /const isDedicatedFlyVenue = isTodaFly \|\| isFukuokaFly/);
assert.match(app, /dedicatedFlyTicketSets\(p\)/);
assert.match(app, /通常AI買い目（10点）/);
assert.match(app, /1号艇飛び専用10点/);
assert.match(app, /isFukuokaFly \? "区分" : "HEAD"/);
assert.match(app, /safe\(currentTrifectaOdds\(ticket\.combo\)\)/);
assert.match(app, /dedicatedFly\?\.status === "unavailable"/);
assert.match(app, /進入変更または入力不足/);
assert.match(app, /算出不可/);

assert.match(css, /\.toda-ticket-scroll\{[^}]*overflow-x:auto/);
assert.match(css, /\.toda-ticket-grid\{[^}]*grid-template-columns:repeat\(2,minmax\(360px,1fr\)\)/);
assert.match(css, /@media\(max-width:390px\)\{\.toda-ticket-grid\{grid-template-columns:repeat\(2,360px\)\}/);

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

console.log("Fukuoka fly ticket two-column and 390px scroll display passed");

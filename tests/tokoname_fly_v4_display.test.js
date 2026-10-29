const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const app = fs.readFileSync('app.js', 'utf8');
const scores = fs.readFileSync('scores.js', 'utf8');

assert.match(app, /const isTokonameFly = currentPayload\?\.venueId === "tokoname"/);
assert.match(app, /p\.flyPrediction\?\.modelVersion === "tokoname_fly_tickets_v4"/);
assert.match(app, /\["waiting", "complete", "unavailable"\]\.includes\(p\.flyPrediction\?\.status\)/);
assert.match(app, /展示待ちです。通常展示が揃うと1号艇飛び買い目を生成します。/);
assert.match(app, /scoresFlyVenue\(currentVenueSlug\)/);
assert.match(scores, /SCORES_FLY_VENUES = new Set\(\['toda', 'fukuoka', 'ashiya', 'tokoname', 'wakamatsu', 'biwako', 'naruto'\]\)/);

const setsStart = app.indexOf('function dedicatedFlyTicketSets');
const setsEnd = app.indexOf('const lane1FlyProbabilityText', setsStart);
assert.ok(setsStart >= 0 && setsEnd > setsStart);
const displayContext = {};
vm.runInNewContext(`${app.slice(setsStart, setsEnd)}\nthis.ticketSets = dedicatedFlyTicketSets;`, displayContext);
const normal = [
  ...Array.from({ length: 6 }, (_, index) => ({ combo: `1-2-${index + 1}`, role: '本線' })),
  ...Array.from({ length: 2 }, (_, index) => ({ combo: `2-1-${index + 3}`, role: 'ずらし' })),
  ...Array.from({ length: 2 }, (_, index) => ({ combo: `3-1-${index + 4}`, role: '荒れ' })),
];
const fly = Array.from({ length: 10 }, (_, index) => ({
  combo: index === 0 ? normal[6].combo : `4-${(index % 5) + 1}-${((index + 2) % 5) + 1}`,
  probability: 10 - index / 2,
}));
const grouped = displayContext.ticketSets({
  ai: normal.slice(0, 8),
  aiUpset: normal.slice(8),
  flyPrediction: { status: 'complete', modelVersion: 'tokoname_fly_tickets_v4', tickets: fly },
});
assert.equal(grouped.normal.length, 10);
assert.equal(grouped.fly.length, 10);
assert.equal(grouped.normal[6].combo, grouped.fly[0].combo, 'normal/fly overlap must be retained');

console.log('Tokoname V4 tabs, waiting state, overlap, and score wiring passed');

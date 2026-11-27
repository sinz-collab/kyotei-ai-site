const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const test = require('node:test');

const app = fs.readFileSync(require('node:path').join(__dirname, '..', 'app.js'), 'utf8');
const start = app.indexOf('function combinedBetOdds(');
const end = app.indexOf('function toggleBetLane(', start);
const context = { currentTrifectaOdds: () => '-' };
vm.runInNewContext(`${app.slice(start, end)};globalThis.calculate=combinedBetOdds;`, context);

test('calculates the weighted harmonic odds for unequal stakes', () => {
  const tickets = [{ combo: '1-2-3', amount: 100 }, { combo: '1-2-4', amount: 200 }];
  assert.equal(context.calculate(tickets, (combo) => combo === '1-2-3' ? '10' : '20'), '15.00倍');
});

test('ignores zero-stake tickets and reports missing odds', () => {
  const tickets = [{ combo: '1-2-3', amount: 100 }, { combo: '1-2-4', amount: 0 }];
  assert.equal(context.calculate(tickets, () => '12.4'), '12.40倍');
  assert.equal(context.calculate(tickets, () => '-'), '—');
  assert.equal(context.calculate([{ combo: '1-2-3', amount: 0 }], () => '12.4'), '—');
});

test('both initial and incremental summaries share the same renderer', () => {
  assert.match(app, /summary\.innerHTML = betSummaryHtml\(tickets\)/);
  assert.match(app, /id="betSummary">\$\{betSummaryHtml\(tickets\)\}/);
});

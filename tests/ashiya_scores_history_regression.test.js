const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '..', 'scores.js'), 'utf8');
const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
assert.match(index, /scores\.js\?v=20261030-naruto-live-comparison/);
const calls = [];
const finalSnapshot = {
  stage: 'live',
  generatedAt: '2026-10-25T13:09:48+09:00',
  normalTickets: Array.from({ length: 10 }, (_, index) => ({
    combination: index === 0 ? '1-2-3' : `1-2-${(index % 4) + 3}`,
  })),
  flyTickets: Array.from({ length: 10 }, (_, index) => ({
    combination: index === 0 ? '2-1-3' : `2-1-${(index % 4) + 3}`,
  })),
  probabilities: { lane1Fly: 33.73 },
};
const payload = {
  date: '2026-10-25',
  races: [{ race: 10, result: {} }],
  preds: {
    10: { prediction_history: { morning: [], live: [finalSnapshot] } },
  },
};
const context = {
  Intl,
  Date,
  async fetchJson(pathname) {
    calls.push(pathname);
    if (pathname.endsWith('/20261025.json')) throw new Error('transient dated payload failure');
    return structuredClone(payload);
  },
  async fetchLiveJson(pathname) {
    if (pathname.endsWith('/10/result.json')) return {
      date: '2026-10-25',
      venue: 'ashiya',
      race_no: 10,
      status: 'complete',
      fetched_at: '2026-10-25T13:15:00+09:00',
      data: { order: ['1', '2', '3'], payout3t: '550円' },
    };
    return null;
  },
};
vm.createContext(context);
vm.runInContext(source, context);

(async () => {
  const directRow = context.scoresRow(10, {}, payload.preds[10], {
    status: 'complete',
    order: '1-2-3',
    payout3t: '550円',
    fetchedAt: '2026-10-25T13:15:00+09:00',
  }, 'ashiya');
  assert.equal(directRow.hit, true);
  assert.equal(directRow.hitType, 'normal');
  assert.equal(directRow.flyRate, 33.73);
  assert.equal(directRow.note, '');

  const loaded = await context.loadScoresVenue({
    slug: 'ashiya',
    dataPath: 'venues/ashiya/20261025.json',
    latestPath: 'venues/ashiya/latest.json',
  }, '2026-10-25');
  assert.deepEqual(calls, ['venues/ashiya/20261025.json', 'venues/ashiya/latest.json']);
  assert.equal(loaded.failed, false);
  assert.equal(loaded.rows[9].hit, true);
  assert.equal(loaded.rows[9].flyRate, 33.73);
  assert.equal(loaded.rows[9].note, '');
  console.log('Ashiya score history and public payload fallback regression passed');
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

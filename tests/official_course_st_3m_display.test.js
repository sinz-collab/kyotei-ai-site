const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const source = fs.readFileSync('app.js', 'utf8');
const compare = source.slice(source.indexOf('function renderCompare()'), source.indexOf('function tableFromRows'));
assert.match(compare, /3か月コース別平均ST/);
assert.match(compare, /公式・直近3か月/);
assert.match(compare, /official_course_st_3m/);
assert.doesNotMatch(compare, /boaters_local_avg_st/);
assert.match(compare, /"—"/);

const scoreFunction = source.slice(source.indexOf('function localStScore(b)'), source.indexOf('function courseScore(b)'));
const context = { num(value, fallback) { return value == null || value === '' ? fallback : Number(value); } };
vm.createContext(context);
vm.runInContext(scoreFunction + '\nthis.score = localStScore;', context);
assert.ok(context.score({ official_course_st_3m: { average_st: .12 }, boaters_local_avg_st: '.25' }) > 0);
assert.equal(context.score({ official_course_st_3m: { average_st: null }, boaters_local_avg_st: '.12' }), 0);
assert.equal(context.score({ boaters_local_avg_st: '.12' }), 0);

const fs = require('node:fs');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const app = fs.readFileSync('app.js', 'utf8');
const scores = fs.readFileSync('scores.js', 'utf8');

assert.match(app, /kiryu_independent_6plus4_frozen_20261104/);
assert.match(app, /\["morning", "live"\]\.includes\(p\.flyPrediction\?\.status\)/);
assert.match(app, /\["wakamatsu", "naruto", "kiryu"\]/);
assert.match(app, /currentVenueSlug === "kiryu"[\s\S]*p\.predictionStage === "live"/);

const context={console}; vm.createContext(context);
vm.runInContext(scores+'\nglobalThis.scoresRowForTest=scoresRow;',context);
const prediction={predictionStage:'live',tickets:[{combination:'1-2-3'}],lane1FlyProbability:52.1,flyPrediction:{tickets:[{combination:'2-1-3'}]}};
const row=context.scoresRowForTest(1,{predictionFinal:prediction},prediction,{status:'complete',order:'2-1-3',payout3t:'1230'},'kiryu');
assert.equal(row.hitType,'fly'); assert.equal(row.flyRate,52.1);
console.log('Kiryu desktop/mobile shared UI and scores contract passed');

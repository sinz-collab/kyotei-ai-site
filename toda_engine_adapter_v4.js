(function (root) {
  "use strict";
  const first = (...values) => values.find((v) => v !== undefined && v !== null && v !== "");

  function raceContext(payload, race) {
    const weather = race?.weather || race?.live?.weather || {};
    const tide = race?.tide || payload?.tide || {};
    return {
      wind_speed: first(weather.wind_speed, weather.wind, weather.speed),
      wave_height: first(weather.wave_height, weather.wave),
      tide_level: first(tide.level, tide.height, race?.tide_level),
      tide_phase: first(tide.phase, tide.label, race?.tide_phase),
      event_day: first(race?.eventDay, payload?.eventDay),
    };
  }

  function ensurePrediction(payload, raceNo) {
    if (!payload || String(payload.venue || "").toLowerCase().includes("戸田") === false) return null;
    const engine = root.TodaEngineV4;
    if (!engine) return null;
    const race = (payload.races || []).find((item) => Number(item.race) === Number(raceNo));
    if (!race || !Array.isArray(race.racers) || race.racers.length !== 6) return null;
    payload.preds = payload.preds || {};
    const key = String(raceNo);
    const existing = payload.preds[key];
    if (existing && existing.engine === engine.ENGINE_ID && existing.win && existing.second && existing.third) return existing;
    const generated = engine.buildMorningPrediction(race, raceContext(payload, race));
    if (!generated) return existing || null;
    payload.preds[key] = { ...(existing || {}), ...generated };
    payload.engine = engine.ENGINE_ID;
    return payload.preds[key];
  }

  function ensureAll(payload) {
    if (!payload || !Array.isArray(payload.races)) return payload;
    for (const race of payload.races) ensurePrediction(payload, race.race);
    return payload;
  }

  const api = { raceContext, ensurePrediction, ensureAll };
  root.TodaEngineAdapterV4 = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);

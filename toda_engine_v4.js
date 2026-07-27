(function (root) {
  "use strict";

  const LANES = [1, 2, 3, 4, 5, 6];
  const ENGINE_ID = "toda_prediction_engine_v4_20260727";
  const MASTER_ID = "Toda_AI_MASTER_v3_1_COMPLETE_ONE_FILE";
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const n = (v, fallback = 0) => {
    const parsed = Number(String(v ?? "").replace(/[^\d.\-]/g, ""));
    return Number.isFinite(parsed) ? parsed : fallback;
  };
  const first = (...values) => values.find((v) => v !== undefined && v !== null && v !== "");
  const laneMap = (rows) => Object.fromEntries((rows || []).map((row) => [String(Number(row.lane)), row]));

  function normalize(values, floor = 0.1) {
    const positive = Object.fromEntries(LANES.map((lane) => [
      String(lane), Math.max(floor, n(values?.[lane] ?? values?.[String(lane)], floor)),
    ]));
    const total = Object.values(positive).reduce((sum, value) => sum + value, 0);
    const out = Object.fromEntries(LANES.map((lane) => [
      String(lane), Math.round((positive[String(lane)] / total) * 1000) / 10,
    ]));
    const correction = Math.round((100 - Object.values(out).reduce((sum, value) => sum + value, 0)) * 10) / 10;
    const maxLane = LANES.reduce((best, lane) => out[String(lane)] > out[String(best)] ? lane : best, 1);
    out[String(maxLane)] = Math.round((out[String(maxLane)] + correction) * 10) / 10;
    return out;
  }

  function field(racer, ...keys) {
    for (const key of keys) {
      if (racer && racer[key] !== undefined && racer[key] !== null && racer[key] !== "") return racer[key];
    }
    return undefined;
  }

  function validSix(document, key) {
    if (!document || document.complete !== true || document.status !== "complete") return null;
    const rows = Array.isArray(document.data?.[key]) ? document.data[key] : [];
    const lanes = rows.map((row) => Number(row.lane));
    return rows.length === 6 && new Set(lanes).size === 6 && lanes.every((lane) => LANES.includes(lane)) ? rows : null;
  }

  function rank(rows, key, lowerIsBetter = true) {
    const ranked = (rows || []).map((row) => ({ lane: Number(row.lane), value: n(row[key], NaN) }))
      .filter((row) => Number.isFinite(row.value))
      .sort((a, b) => lowerIsBetter ? a.value - b.value : b.value - a.value);
    return Object.fromEntries(ranked.map((row, index) => [String(row.lane), index + 1]));
  }

  function seasonForm(racer) {
    const runs = Array.isArray(racer?.season_runs) ? racer.season_runs : [];
    if (!runs.length) return 0;
    let score = 0;
    let weight = 0;
    runs.slice(-8).forEach((run, index) => {
      const w = 1 + index * 0.10;
      const finish = n(first(run.finish, run.rank, run.arrival), 6);
      const st = n(first(run.st, run.start_time), 0.19);
      const course = n(first(run.course, run.lane), 3.5);
      score += w * ((4 - finish) * 0.52 + clamp((0.19 - st) * 9, -0.75, 0.75) + (course <= 3 ? 0.08 : 0));
      weight += w;
    });
    return weight ? clamp(score / weight, -2.2, 2.2) : 0;
  }

  function classBonus(racer) {
    return { A1: 2.25, A2: 1.20, B1: 0, B2: -1.15 }[String(field(racer, "class", "grade") || "")] || 0;
  }

  function baseStrength(racer, lane) {
    const natWin = n(field(racer, "nat_win", "national_win_rate", "win_rate"), 4.5);
    const localWin = n(field(racer, "local_win", "local_win_rate", "toda_win_rate"), natWin);
    const avgSt = n(field(racer, "avg_st", "national_avg_st", "average_st"), 0.18);
    const localStRaw = n(field(racer, "local_st", "local_avg_st", "toda_avg_st"), NaN);
    const courseStRaw = n(field(racer, "course_st", "lane_avg_st", "course_avg_st"), NaN);
    const motor2 = n(field(racer, "motor_2", "motor_2rate", "motor_two_rate"), 32);
    const boat2 = n(field(racer, "boat_2", "boat_2rate", "boat_two_rate"), 32);
    const courseFit = n(field(racer, "course_fit", "course_score", "player_course_score"), 0);
    const weakness = n(field(racer, "course_weakness", "weakness_score"), 0);
    const entryShift = n(field(racer, "entry_shift_fit", "entry_shift_score"), 0);
    const lanePrior = [0, 1.65, 0.50, 0.22, 0.03, -0.28, -0.58][lane];
    const stBase = clamp((0.18 - avgSt) * 10, -0.9, 0.9);
    const localSt = Number.isFinite(localStRaw) ? clamp((0.18 - localStRaw) * 7, -0.65, 0.65) : 0;
    const courseSt = Number.isFinite(courseStRaw) ? clamp((0.18 - courseStRaw) * 7, -0.65, 0.65) : 0;
    return classBonus(racer)
      + (natWin - 4.5) * 0.88
      + (localWin - 4.5) * 0.70
      + (motor2 - 32) * 0.042
      + (boat2 - 32) * 0.016
      + stBase + localSt + courseSt
      + clamp(courseFit, -2, 2) * 0.35
      - clamp(weakness, 0, 2) * 0.30
      + clamp(entryShift, -2, 2) * 0.18
      + lanePrior
      + seasonForm(racer);
  }

  function oneReliability(one) {
    const localWin = n(field(one, "local_win", "local_win_rate", "toda_win_rate"), n(field(one, "nat_win", "national_win_rate"), 4.5));
    const avgSt = n(field(one, "avg_st", "national_avg_st"), 0.18);
    const courseFit = n(field(one, "course_fit", "course_score", "player_course_score"), 0);
    return (localWin - 4.8) * 0.45 + clamp((0.185 - avgSt) * 8, -0.7, 0.7) + courseFit * 0.20;
  }

  function detectScenarios(race, context = {}) {
    const racers = Array.isArray(race?.racers) ? race.racers : [];
    const byLane = laneMap(racers);
    const scores = Object.fromEntries(LANES.map((lane) => [String(lane), baseStrength(byLane[String(lane)] || {}, lane)]));
    const scenarios = [];
    const one = byLane["1"] || {};
    const two = byLane["2"] || {};
    const three = byLane["3"] || {};
    const four = byLane["4"] || {};
    const oneRel = oneReliability(one);
    const oneWeak = oneRel < -0.15 || scores["1"] < Math.max(scores["2"], scores["3"], scores["4"]) - 0.65;

    if (!oneWeak || scores["1"] >= Math.max(scores["2"], scores["3"], scores["4"]) - 0.30) {
      scenarios.push({ id: "IN_ESCAPE", label: "1逃げ", head: 1, weight: clamp(0.88 + oneRel * 0.25, 0.45, 1.25), links: [2, 3, 4, 5] });
    }
    const twoSt = n(field(two, "course_st", "avg_st", "local_st"), 0.19);
    if (twoSt <= 0.185 && (n(field(two, "local_win", "nat_win"), 0) >= 5.0 || String(field(two, "class", "grade") || "").startsWith("A"))) {
      scenarios.push({ id: "TWO_SASHI", label: "2差し", head: 2, weight: oneWeak ? 1.10 : 0.70, links: [1, 3, 4, 5] });
    }
    const threeSt = n(field(three, "course_st", "avg_st", "local_st"), 0.19);
    if (threeSt <= 0.18 && scores["3"] >= scores["2"] - 0.55) {
      scenarios.push({ id: "THREE_ATTACK", label: "3攻め", head: 3, weight: oneWeak ? 1.16 : 0.80, links: [4, 5, 1, 2, 6] });
    }
    const fourSt = n(field(four, "course_st", "avg_st", "local_st"), 0.19);
    if (fourSt <= 0.18 && scores["4"] >= scores["3"] - 0.60) {
      scenarios.push({ id: "FOUR_KADO", label: "4カド攻め", head: 4, weight: oneWeak ? 1.08 : 0.74, links: [5, 6, 1, 3, 2] });
    }

    const wind = n(first(context.wind_speed, context.wind), 0);
    const wave = n(first(context.wave_height, context.wave), 0);
    const tidePhase = String(first(context.tide_phase, context.tidePhase, ""));
    scenarios.forEach((scenario) => {
      if (wind >= 4 || wave >= 4) {
        if ([3, 4, 5].includes(scenario.head)) scenario.weight += 0.10;
        if (scenario.head === 1) scenario.weight -= 0.10;
      }
      if (/干潮|低潮|下げ止まり/.test(tidePhase) && [3, 4].includes(scenario.head)) scenario.weight += 0.08;
      if (/上げ|満潮/.test(tidePhase) && scenario.head === 1) scenario.weight += 0.06;
      scenario.weight = clamp(scenario.weight, 0.25, 1.35);
    });
    return { scores, scenarios: scenarios.sort((a, b) => b.weight - a.weight), oneWeak };
  }

  function conditionalOpponentScores(axis, scores, scenarios, position) {
    const scenario = scenarios.find((s) => s.head === axis);
    const links = scenario?.links || LANES.filter((lane) => lane !== axis);
    const rankBonus = Object.fromEntries(links.map((lane, index) => [String(lane), Math.max(0, 0.65 - index * 0.12)]));
    return Object.fromEntries(LANES.map((lane) => {
      const key = String(lane);
      if (lane === axis) return [key, 0.05];
      const base = scores[key] * (position === "second" ? 0.34 : 0.22);
      const outerThird = position === "third" && [4, 5, 6].includes(lane) ? 0.12 : 0;
      return [key, Math.exp(base + (rankBonus[key] || 0) + outerThird)];
    }));
  }

  function comboProbability(combo, win, second, third) {
    const [a, b, c] = String(combo).split("-").map(Number);
    if (!a || !b || !c) return 0;
    return Math.round((
      n(win[String(a)], 0) *
      n(second[String(b)], 0) *
      n(third[String(c)], 0) / 10000
    ) * 10) / 10;
  }

  function ticketObjects(combos, win, second, third, role) {
    return combos.map((combo, index) => ({
      combo,
      role: index < 3 ? role : `${role}・展開保険`,
      prob: comboProbability(combo, win, second, third),
      odds: "-",
    }));
  }

  function buildTicketCombos(win, second, third, scenarios, sab) {
    const heads = LANES.slice().sort((a, b) => win[String(b)] - win[String(a)]);
    const headLimit = sab === "S" ? 1 : (sab === "A" ? 2 : 3);
    const tickets = [];
    for (const head of heads.slice(0, headLimit)) {
      const links = scenarios.find((s) => s.head === head)?.links || LANES.filter((lane) => lane !== head);
      const secondOrder = links.filter((lane) => lane !== head)
        .sort((a, b) => second[String(b)] - second[String(a)]).slice(0, 3);
      for (const secondLane of secondOrder) {
        const thirdOrder = links.filter((lane) => lane !== head && lane !== secondLane)
          .sort((a, b) => third[String(b)] - third[String(a)]).slice(0, 2);
        for (const thirdLane of thirdOrder) tickets.push(`${head}-${secondLane}-${thirdLane}`);
      }
    }
    return [...new Set(tickets)].slice(0, sab === "S" ? 6 : sab === "A" ? 9 : 10);
  }

  function buildUpsetCombos(win, second, third, scenarios) {
    const nonOneHeads = LANES.filter((lane) => lane !== 1)
      .sort((a, b) => win[String(b)] - win[String(a)])
      .slice(0, 2);
    const tickets = [];
    for (const head of nonOneHeads) {
      const links = scenarios.find((s) => s.head === head)?.links || LANES.filter((lane) => lane !== head);
      const seconds = links.filter((lane) => lane !== head)
        .sort((a, b) => second[String(b)] - second[String(a)]).slice(0, 2);
      for (const secondLane of seconds) {
        const thirds = LANES.filter((lane) => lane !== head && lane !== secondLane)
          .sort((a, b) => third[String(b)] - third[String(a)]).slice(0, 2);
        for (const thirdLane of thirds) tickets.push(`${head}-${secondLane}-${thirdLane}`);
      }
    }
    return [...new Set(tickets)].slice(0, 8);
  }

  function buildMorningPrediction(race, context = {}) {
    const racers = Array.isArray(race?.racers) ? race.racers : [];
    if (racers.length !== 6) return null;
    const { scores, scenarios, oneWeak } = detectScenarios(race, context);
    const winRaw = { ...scores };
    scenarios.forEach((scenario) => { winRaw[String(scenario.head)] += scenario.weight * 1.28; });
    const win = normalize(Object.fromEntries(LANES.map((lane) => [String(lane), Math.exp(winRaw[String(lane)] * 0.50)])));
    const heads = LANES.slice().sort((a, b) => win[String(b)] - win[String(a)]);
    const axis = heads[0];
    const second = normalize(conditionalOpponentScores(axis, scores, scenarios, "second"));
    const third = normalize(conditionalOpponentScores(axis, scores, scenarios, "third"));
    const gap = win[String(axis)] - win[String(heads[1])];
    const scenarioAligned = scenarios.some((s) => s.head === axis && s.weight >= 0.75);
    const sab = gap >= 9 && scenarioAligned ? "S" : (gap >= 4.2 ? "A" : "B");
    const ticketCombos = buildTicketCombos(win, second, third, scenarios, sab);
    const upsetCombos = buildUpsetCombos(win, second, third, scenarios);
    const ai = ticketObjects(ticketCombos, win, second, third, "本線");
    const aiUpset = ticketObjects(upsetCombos, win, second, third, "荒れ対応");
    const attackScenario = scenarios.find((s) => [2, 3, 4, 5].includes(s.head)) || scenarios[0];
    const upsetIndex = Math.round(clamp(
      100 - win["1"] + (oneWeak ? 12 : 0) + Math.max(0, win[String(heads[1])] - 12),
      5, 95
    ) * 10) / 10;
    return {
      engine: ENGINE_ID,
      master: MASTER_ID,
      win, second, third,
      top3: Object.fromEntries(LANES.map((lane) => [String(lane), Math.min(99.9, Math.round((win[String(lane)] + second[String(lane)] + third[String(lane)]) * 10) / 10)])),
      scenarios,
      primaryScenario: scenarios.find((s) => s.head === axis)?.label || `${axis}号艇中心`,
      oneWeak,
      sab,
      confidence: Math.round(clamp(47 + gap * 2.0 + (sab === "S" ? 8 : sab === "A" ? 3 : 0), 40, 88)),
      upsetIndex,
      attack: {
        attackLane: attackScenario?.head || axis,
        label: attackScenario?.label || `${axis}号艇中心`,
      },
      readability: {
        axisLane: axis,
        comment: `主軸${axis}号艇／${scenarios.find((s) => s.head === axis)?.label || "基礎能力上位"}`,
      },
      tideZone: {
        nearest: first(context.tide_phase, context.tidePhase, "-"),
        phase: first(context.tide_phase, context.tidePhase, "-"),
        bucket: first(context.tide_level, context.tideLevel, "-"),
      },
      tickets: ticketCombos,
      ai,
      aiUpset,
      probabilityFlow: {
        required: true, baseApplied: true, baseLabel: "戸田v4事前基礎予想",
        realtimeApplied: false, realtimeLabel: "直前情報未反映", reviewed: false,
        reviewLabel: "直前情報待ち", adjustedRequired: true,
      },
      predictionStage: { label: "事前予想", statusText: "戸田v4：情報源・事前データ・展開シナリオ反映", badge: "事前", color: "blue" },
      oddsUsedForProbability: false,
      exhibitionStartUsedAlone: false,
    };
  }

  function applyLiveReview(prediction, documents) {
    const directRows = validSix(documents.direct, "racers");
    const exhibitionRows = validSix(documents.exhibition, "entries");
    if (!directRows || !exhibitionRows) return false;
    const baseline = prediction._todaV4Baseline || {
      win: { ...(prediction.win || {}) }, second: { ...(prediction.second || {}) }, third: { ...(prediction.third || {}) },
    };
    Object.defineProperty(prediction, "_todaV4Baseline", { value: baseline, writable: true, configurable: true, enumerable: false });
    const exhibitionRank = rank(exhibitionRows, "exhibition_time", true);
    if (Object.keys(exhibitionRank).length !== 6) return false;
    const originalRows = validSix(documents.original_exhibition, "entries");
    const originalRank = originalRows ? rank(originalRows, "sum", true) : {};
    const directByLane = laneMap(directRows);
    const exhibitionByLane = laneMap(exhibitionRows);
    const wind = n(first(documents.direct?.data?.wind_speed, documents.direct?.data?.wind), 0);
    const wave = n(first(documents.direct?.data?.wave_height, documents.direct?.data?.wave), 0);
    const adjustments = {};

    LANES.forEach((lane) => {
      const key = String(lane);
      const ex = exhibitionByLane[key] || {};
      const direct = directByLane[key] || {};
      const rankStrength = 3.5 - exhibitionRank[key];
      const course = n(ex.exhibition_course, lane);
      const courseShift = clamp(lane - course, -2, 2);
      const originalStrength = originalRank[key] ? 3.5 - originalRank[key] : 0;
      const parts = direct.parts_exchange ? -0.32 : 0;
      const weight = -Math.min(0.35, Math.max(0, n(direct.weight_adjustment, 0)) * 0.09);
      const outerWater = (wind >= 4 || wave >= 4) && [3, 4, 5].includes(course) ? 0.20 : 0;
      adjustments[key] = {
        win: clamp(rankStrength * 0.68 + courseShift * 0.40 + originalStrength * 0.30 + parts + weight + outerWater, -5.5, 5.5),
        second: clamp(rankStrength * 0.44 + courseShift * 0.23 + originalStrength * 0.21 + parts * 0.5 + weight * 0.5 + outerWater * 0.7, -4.0, 4.0),
        third: clamp(rankStrength * 0.29 + courseShift * 0.11 + originalStrength * 0.15 + parts * 0.25 + weight * 0.25 + outerWater * 0.5, -3.0, 3.0),
      };
    });

    const reviewed = {};
    ["win", "second", "third"].forEach((position) => {
      reviewed[position] = normalize(Object.fromEntries(LANES.map((lane) => {
        const key = String(lane);
        return [key, n(baseline[position]?.[key] ?? baseline[position]?.[lane], 0.1) + adjustments[key][position]];
      })));
      prediction[position] = reviewed[position];
    });
    prediction.top3 = Object.fromEntries(LANES.map((lane) => [String(lane), Math.min(99.9, Math.round((reviewed.win[String(lane)] + reviewed.second[String(lane)] + reviewed.third[String(lane)]) * 10) / 10)]));
    prediction.probabilityReview = Object.fromEntries(LANES.map((lane) => {
      const key = String(lane);
      return [key, {
        morningWin: n(baseline.win[key], 0), morningSecond: n(baseline.second[key], 0), morningThird: n(baseline.third[key], 0),
        win: reviewed.win[key], second: reviewed.second[key], third: reviewed.third[key],
        deltaWin: Math.round((reviewed.win[key] - n(baseline.win[key], 0)) * 10) / 10,
        deltaSecond: Math.round((reviewed.second[key] - n(baseline.second[key], 0)) * 10) / 10,
        deltaThird: Math.round((reviewed.third[key] - n(baseline.third[key], 0)) * 10) / 10,
      }];
    }));
    const liveScenarios = Array.isArray(prediction.scenarios) ? prediction.scenarios : [];
    const liveSab = prediction.sab || "B";
    const liveCombos = buildTicketCombos(reviewed.win, reviewed.second, reviewed.third, liveScenarios, liveSab);
    const liveUpsetCombos = buildUpsetCombos(reviewed.win, reviewed.second, reviewed.third, liveScenarios);
    prediction.tickets = liveCombos;
    prediction.ai = ticketObjects(liveCombos, reviewed.win, reviewed.second, reviewed.third, "本線");
    prediction.aiUpset = ticketObjects(liveUpsetCombos, reviewed.win, reviewed.second, reviewed.third, "荒れ対応");
    const liveHeads = LANES.slice().sort((a, b) => reviewed.win[String(b)] - reviewed.win[String(a)]);
    prediction.readability = {
      ...(prediction.readability || {}),
      axisLane: liveHeads[0],
      comment: `直前補正後の主軸${liveHeads[0]}号艇`,
    };
    prediction.upsetIndex = Math.round(clamp(
      100 - reviewed.win["1"] + (prediction.oneWeak ? 12 : 0),
      5, 95
    ) * 10) / 10;
    prediction.engine = ENGINE_ID;
    prediction.master = MASTER_ID;
    prediction.probabilityReviewStatus = "reviewed";
    prediction.probabilityFlow = {
      required: true, baseApplied: true, baseLabel: "戸田v4事前基礎予想",
      realtimeApplied: true, realtimeLabel: "実進入・展示・オリ展示・風波反映",
      reviewed: true, reviewLabel: "確率補正・再正規化済み", adjustedRequired: true,
    };
    prediction.liveReviewMeta = {
      method: "toda_master_scenario_live_review_v4",
      directFetchedAt: documents.direct?.fetched_at,
      exhibitionFetchedAt: documents.exhibition?.fetched_at,
      originalExhibitionApplied: Boolean(originalRows),
      oddsUsedForProbability: false,
      oddsRequiredForReview: false,
      exhibitionStartUsedAlone: false,
      windWaveApplied: wind > 0 || wave > 0,
    };
    prediction.predictionStage = { label: "本予想", statusText: "戸田v4：実進入・展示・オリ展示・風波を確率補正して再正規化", badge: "本予想", color: "green" };
    return true;
  }

  const api = { LANES, ENGINE_ID, MASTER_ID, normalize, detectScenarios, buildMorningPrediction, applyLiveReview, buildTicketCombos, buildUpsetCombos };
  root.TodaEngineV4 = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);

(function (root) {
  "use strict";
  if (!root.TodaEngineV4 || !root.TodaEngineAdapterV4) return;

  const previousLiveReview = typeof root.applyLivePredictionReview === "function"
    ? root.applyLivePredictionReview
    : null;

  root.applyLivePredictionReview = function (prediction, documents) {
    const venue = String(documents?.direct?.venue || documents?.exhibition?.venue || "").toLowerCase();
    const isToda = venue === "toda" || venue.includes("戸田");
    if (isToda) return root.TodaEngineV4.applyLiveReview(prediction, documents);
    return previousLiveReview ? previousLiveReview(prediction, documents) : false;
  };

  const previousOpenVenue = typeof root.openVenue === "function" ? root.openVenue : null;
  if (previousOpenVenue) {
    root.openVenue = async function (...args) {
      const result = await previousOpenVenue.apply(this, args);
      try {
        if (typeof currentVenueSlug !== "undefined" && currentVenueSlug === "toda" && typeof currentPayload !== "undefined") {
          root.TodaEngineAdapterV4.ensureAll(currentPayload);
          if (typeof currentPredictionAvailable !== "undefined") currentPredictionAvailable = true;
          if (typeof renderRace === "function") renderRace();
        }
      } catch (error) {
        console.error("Toda v4 integration error", error);
      }
      return result;
    };
  }

  const previousSelectRace = typeof root.selectRace === "function" ? root.selectRace : null;
  if (previousSelectRace) {
    root.selectRace = async function (...args) {
      try {
        if (typeof currentVenueSlug !== "undefined" && currentVenueSlug === "toda" && typeof currentPayload !== "undefined") {
          root.TodaEngineAdapterV4.ensurePrediction(currentPayload, args[0]);
        }
      } catch (_) {}
      return previousSelectRace.apply(this, args);
    };
  }

  root.TODA_ENGINE_V4_INSTALLED = true;
})(typeof window !== "undefined" ? window : globalThis);

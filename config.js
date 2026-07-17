window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7fbf2f492fb385a1c33f32f418c0fbd5c4c4bb5e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7fbf2f492fb385a1c33f32f418c0fbd5c4c4bb5e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

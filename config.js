window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3d8c4fff8020408d5d8a3286f563a8d05455176a/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3d8c4fff8020408d5d8a3286f563a8d05455176a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

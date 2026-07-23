window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2b8e5cb0bef0827d7592210f8b5062f64f4be4fe/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2b8e5cb0bef0827d7592210f8b5062f64f4be4fe/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

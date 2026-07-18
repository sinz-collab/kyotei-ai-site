window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a4ac69c9e9c91410a6021c3a3f3b0c30eb6304b1/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a4ac69c9e9c91410a6021c3a3f3b0c30eb6304b1/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

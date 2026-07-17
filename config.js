window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/60dd53e8f59dfaddc00ffea62a6ede1c5bdb4b73/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/60dd53e8f59dfaddc00ffea62a6ede1c5bdb4b73/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

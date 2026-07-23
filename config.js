window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/34c22fd0f543b042c5ffadf1fe9a475443534255/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/34c22fd0f543b042c5ffadf1fe9a475443534255/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1fbd15a31a8a7cb124ccf3bca281688f77b67896/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1fbd15a31a8a7cb124ccf3bca281688f77b67896/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

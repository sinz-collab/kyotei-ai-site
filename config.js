window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/eb54dd6c8b1afd846b23e8ff25124516f2b9ab76/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/eb54dd6c8b1afd846b23e8ff25124516f2b9ab76/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

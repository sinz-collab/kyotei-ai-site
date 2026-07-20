window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b10dda9cd3654d2a1f6dd9692d2a68d2379e0fc6/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b10dda9cd3654d2a1f6dd9692d2a68d2379e0fc6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

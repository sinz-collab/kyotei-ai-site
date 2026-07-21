window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/32f936fef0a83f49a6bb7e67da0520209a2962c6/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/32f936fef0a83f49a6bb7e67da0520209a2962c6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

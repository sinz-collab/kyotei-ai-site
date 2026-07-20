window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/48c31a8b32501913f2f94291378fb961e98d978a/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/48c31a8b32501913f2f94291378fb961e98d978a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

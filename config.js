window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0a3c1f0f25fd3cd2f3c02173a07c24bc553027af/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0a3c1f0f25fd3cd2f3c02173a07c24bc553027af/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

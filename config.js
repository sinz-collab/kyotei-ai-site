window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f8b589a6c092dd2025397e0fb2a8ddb2a5a24c71/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f8b589a6c092dd2025397e0fb2a8ddb2a5a24c71/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

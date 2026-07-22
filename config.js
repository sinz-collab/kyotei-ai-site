window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/303b6ffc1bb6c8e5adfc934022d21b3523502b32/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/303b6ffc1bb6c8e5adfc934022d21b3523502b32/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

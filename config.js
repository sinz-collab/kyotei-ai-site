window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a6995a288ea8050dd429c5c7eb0b35701d47fd93/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a6995a288ea8050dd429c5c7eb0b35701d47fd93/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

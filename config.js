window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bbaf71877907e626eaf3dc51cb8a1dee413fc86e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bbaf71877907e626eaf3dc51cb8a1dee413fc86e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

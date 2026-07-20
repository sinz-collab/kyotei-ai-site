window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1d95f62e3303cf45e1dfa1a0ce4ebc3da507f18d/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1d95f62e3303cf45e1dfa1a0ce4ebc3da507f18d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

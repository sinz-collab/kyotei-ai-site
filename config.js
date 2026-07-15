window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/dfe0b41b9556c230d6ca3fd250c9c810a1fd8aa4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/dfe0b41b9556c230d6ca3fd250c9c810a1fd8aa4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d8e783e25cd000ee68a58a1323d8bde80fc0e242/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d8e783e25cd000ee68a58a1323d8bde80fc0e242/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

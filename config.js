window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5ca640b26fb8e7fabc2b0a26a6fbdff79348c774/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5ca640b26fb8e7fabc2b0a26a6fbdff79348c774/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/854e1a6060df5bb41096bdb1c8f4659477bbbff6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/854e1a6060df5bb41096bdb1c8f4659477bbbff6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/83865ebb6ca975269f31cc66b225dd36b39ebe9f/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/83865ebb6ca975269f31cc66b225dd36b39ebe9f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

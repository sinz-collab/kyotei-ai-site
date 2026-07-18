window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9f30a48d1005e4c92f471561e985f8010a25c243/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9f30a48d1005e4c92f471561e985f8010a25c243/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

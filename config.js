window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cb8e8d89bf953201a201f23f5150cba5a9765baa/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cb8e8d89bf953201a201f23f5150cba5a9765baa/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

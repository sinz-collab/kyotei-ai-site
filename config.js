window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e4e7820d36aacfbf97b336aeac5e2f95848b5de5/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e4e7820d36aacfbf97b336aeac5e2f95848b5de5/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

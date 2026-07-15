window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/194674870bd2b583f6fbd54dd2ba511117db0cd3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/194674870bd2b583f6fbd54dd2ba511117db0cd3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8358b08d949bf81e4a9a7aabac8c2651083e0ab6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8358b08d949bf81e4a9a7aabac8c2651083e0ab6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

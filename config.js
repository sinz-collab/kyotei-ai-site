window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7537f7c7c65fc1e2ca789749ec659b26fabb9196/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7537f7c7c65fc1e2ca789749ec659b26fabb9196/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

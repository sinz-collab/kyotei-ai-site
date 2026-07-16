window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/eb8fb80d06c6d947cb1e3c57a8767026e3350c3b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/eb8fb80d06c6d947cb1e3c57a8767026e3350c3b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

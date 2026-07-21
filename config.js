window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4bca2b23f515a2a6122b85aa3f66b0d6fc817702/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4bca2b23f515a2a6122b85aa3f66b0d6fc817702/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

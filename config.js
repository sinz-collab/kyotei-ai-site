window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ced5eb14ba1f3746c7d42f437b2699ed549d4e9d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ced5eb14ba1f3746c7d42f437b2699ed549d4e9d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

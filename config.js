window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c7abd9a0c5f59096b123c725fd41e75f8e8b1398/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c7abd9a0c5f59096b123c725fd41e75f8e8b1398/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3c1ac6d31712dd6ecd06e302b874e02ca95bb264/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3c1ac6d31712dd6ecd06e302b874e02ca95bb264/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

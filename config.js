window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a2218371f38c1d4efce3fa760d943d2b10da7d24/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a2218371f38c1d4efce3fa760d943d2b10da7d24/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

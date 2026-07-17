window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a3bfff535f1e79f673f9f2d14ead48c8883e29da/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a3bfff535f1e79f673f9f2d14ead48c8883e29da/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

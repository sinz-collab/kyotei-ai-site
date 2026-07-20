window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/498d09a673c5e3b7c0a528cce29cb8a28d84c3c1/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/498d09a673c5e3b7c0a528cce29cb8a28d84c3c1/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

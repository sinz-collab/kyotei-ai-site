window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a7402b0371d2b7f1352d5b5b0f14d5d978baf9b7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a7402b0371d2b7f1352d5b5b0f14d5d978baf9b7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

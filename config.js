window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/90410414dd6ffb684c4fc16868e01932ed3310cc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/90410414dd6ffb684c4fc16868e01932ed3310cc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

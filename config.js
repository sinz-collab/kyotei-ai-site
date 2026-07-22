window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e31c96fe148f728e05f5bc19ebf31e11e8cf6459/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e31c96fe148f728e05f5bc19ebf31e11e8cf6459/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a22b2daa05df9e7802d009c30a80a64abdcf22a9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a22b2daa05df9e7802d009c30a80a64abdcf22a9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

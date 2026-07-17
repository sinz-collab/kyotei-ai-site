window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/11b6e2a775c9ffc482f2b094c7ba414a9038753f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/11b6e2a775c9ffc482f2b094c7ba414a9038753f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

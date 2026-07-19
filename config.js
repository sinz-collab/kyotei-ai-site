window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/372b348139c5d9a4e05203ac47b3956d5f8c8516/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/372b348139c5d9a4e05203ac47b3956d5f8c8516/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ec12b6e884b5075bf9202f6824984e4aa43e604e/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ec12b6e884b5075bf9202f6824984e4aa43e604e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5dab5084c5155e9a559fbac670b9e812ea8e01fe/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5dab5084c5155e9a559fbac670b9e812ea8e01fe/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

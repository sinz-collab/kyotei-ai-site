window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f3cabcf761e38c043679d08719b8bf124bb73c76/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f3cabcf761e38c043679d08719b8bf124bb73c76/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

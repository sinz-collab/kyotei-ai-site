window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/90f447c7b1bed35dbd6f05b1368bbe2bcbf869d5/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/90f447c7b1bed35dbd6f05b1368bbe2bcbf869d5/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a98dc955b48a7054a0e31bdb1a52b42934cb1f7b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a98dc955b48a7054a0e31bdb1a52b42934cb1f7b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

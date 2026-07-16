window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/818d6e3de2c5199ebb90eb5a8d011742ea44ca3d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/818d6e3de2c5199ebb90eb5a8d011742ea44ca3d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

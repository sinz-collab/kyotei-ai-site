window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b63fca71f1e3a0d8036ee1b170a1e7b66fccabb9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b63fca71f1e3a0d8036ee1b170a1e7b66fccabb9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

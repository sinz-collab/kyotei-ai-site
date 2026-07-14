window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f9e2b21da29ce910e8c4dd82bbff4f106e0890b8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f9e2b21da29ce910e8c4dd82bbff4f106e0890b8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

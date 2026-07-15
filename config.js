window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f4f628c29eafed523eecb2af29d03f5404a9ed8d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f4f628c29eafed523eecb2af29d03f5404a9ed8d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

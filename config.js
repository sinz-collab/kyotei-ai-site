window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/928198a14451c20bfcecc48dddb76ec27d15590f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/928198a14451c20bfcecc48dddb76ec27d15590f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

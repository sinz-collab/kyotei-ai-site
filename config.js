window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4f3e31c9e1eb76938955e0183289b78e52136803/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4f3e31c9e1eb76938955e0183289b78e52136803/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

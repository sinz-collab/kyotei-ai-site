window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/180fd99840003128a49026c8636a9eae587113db/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/180fd99840003128a49026c8636a9eae587113db/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

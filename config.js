window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/247947409ce19294d1afa6c4f596aaa3a6f09d2f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/247947409ce19294d1afa6c4f596aaa3a6f09d2f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

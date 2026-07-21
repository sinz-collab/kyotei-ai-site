window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/90d021235678137c51990b8514201474705e6b75/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/90d021235678137c51990b8514201474705e6b75/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

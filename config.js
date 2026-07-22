window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9a60eda05a138beee474d952ffb1ea2604ae8a4e/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9a60eda05a138beee474d952ffb1ea2604ae8a4e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

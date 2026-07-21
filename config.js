window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4e3181e638079d6ed1a69b0320e7fb7fa49bc673/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4e3181e638079d6ed1a69b0320e7fb7fa49bc673/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

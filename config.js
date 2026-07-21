window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/dfd348713054eb292695870a52162517967e8138/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/dfd348713054eb292695870a52162517967e8138/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

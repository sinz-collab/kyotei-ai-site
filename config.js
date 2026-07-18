window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e68f9f6cb16c6ef7c3baeb7f29e093eb80e237f5/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e68f9f6cb16c6ef7c3baeb7f29e093eb80e237f5/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

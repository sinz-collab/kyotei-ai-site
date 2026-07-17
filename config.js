window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b45fa407119b8607515a2920b3cab09d57e1d6bc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b45fa407119b8607515a2920b3cab09d57e1d6bc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

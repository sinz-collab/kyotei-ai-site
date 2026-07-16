window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/aee6e4c345ac6c157eadc5cdba68ab80669c236c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/aee6e4c345ac6c157eadc5cdba68ab80669c236c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

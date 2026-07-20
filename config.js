window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/54424f1a076d8d91c12ca683ad4dab73308e29c8/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/54424f1a076d8d91c12ca683ad4dab73308e29c8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

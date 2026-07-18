window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6fe034bae7d5e92cbe7d6f4301d4f9def9d7f66f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6fe034bae7d5e92cbe7d6f4301d4f9def9d7f66f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

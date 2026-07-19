window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/69f82a8bc0cc4f99ec66b5f19e0b41bed8c3c85d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/69f82a8bc0cc4f99ec66b5f19e0b41bed8c3c85d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

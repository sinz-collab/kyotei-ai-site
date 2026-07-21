window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2d5b9c6addf8ef2495f9bd86b9fa1d0e4afed456/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2d5b9c6addf8ef2495f9bd86b9fa1d0e4afed456/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

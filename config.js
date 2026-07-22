window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a7339d59a47d04807d743fed2c9ce042fe2a0bd6/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a7339d59a47d04807d743fed2c9ce042fe2a0bd6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

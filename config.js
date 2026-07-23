window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/81fd99540ed3d85d7a6ec49bfa03e4acf078333d/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/81fd99540ed3d85d7a6ec49bfa03e4acf078333d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

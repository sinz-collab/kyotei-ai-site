window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/06d13ea035e8b84bdbf4b403102358b0ef9ce41c/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/06d13ea035e8b84bdbf4b403102358b0ef9ce41c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

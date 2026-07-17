window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e19fc130cebb9e04fc19e676c0a9c4e54c9e75c8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e19fc130cebb9e04fc19e676c0a9c4e54c9e75c8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

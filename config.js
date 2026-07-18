window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/108a9ed58b872a07730b93c314a6321e91eb4f18/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/108a9ed58b872a07730b93c314a6321e91eb4f18/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

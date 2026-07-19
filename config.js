window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bb9598cbf1d4d5bce58ce372432a534da88e0e14/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bb9598cbf1d4d5bce58ce372432a534da88e0e14/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

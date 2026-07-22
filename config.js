window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c3e98d321bab9c0dbe33750e6a05b0c4f6487fcd/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c3e98d321bab9c0dbe33750e6a05b0c4f6487fcd/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

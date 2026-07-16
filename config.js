window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9b77b5c6e64ccb40d394ca4c74f7797f4925e926/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9b77b5c6e64ccb40d394ca4c74f7797f4925e926/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

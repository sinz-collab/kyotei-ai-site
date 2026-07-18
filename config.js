window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/78ba6761d9111cc38a2ea5ec1556cefaa4bd73a3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/78ba6761d9111cc38a2ea5ec1556cefaa4bd73a3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

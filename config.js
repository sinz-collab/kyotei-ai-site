window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a47bcbaaeeae49c1bb5920a18755de622d66ba2c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a47bcbaaeeae49c1bb5920a18755de622d66ba2c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

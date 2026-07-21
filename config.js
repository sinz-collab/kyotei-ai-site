window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f7473558c41fdf409dd0bd37a9353d1408928f69/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f7473558c41fdf409dd0bd37a9353d1408928f69/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

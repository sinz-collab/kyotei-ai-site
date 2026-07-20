window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b3ce29fb148fabe625969d9df13fd14234971dd6/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b3ce29fb148fabe625969d9df13fd14234971dd6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

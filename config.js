window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/12f4a4dfb735078ad669223552a3ac29946a0a5a/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/12f4a4dfb735078ad669223552a3ac29946a0a5a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

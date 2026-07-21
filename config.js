window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f68bd713d327baba1db3a971a5d43cad42eda96c/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f68bd713d327baba1db3a971a5d43cad42eda96c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

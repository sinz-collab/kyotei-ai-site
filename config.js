window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c02985fd78a48b5de8b92c94e1c1b35488214f76/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c02985fd78a48b5de8b92c94e1c1b35488214f76/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/adf761d780f3153e1feb20f17121a4942a2abc01/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/adf761d780f3153e1feb20f17121a4942a2abc01/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

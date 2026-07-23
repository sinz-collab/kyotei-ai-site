window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/41a8f45968ca96b0158e26dc77604c62f17bc0dc/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/41a8f45968ca96b0158e26dc77604c62f17bc0dc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

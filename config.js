window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/32580dad7ecad1e1fa8b33be2781f6018cb63df9/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/32580dad7ecad1e1fa8b33be2781f6018cb63df9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

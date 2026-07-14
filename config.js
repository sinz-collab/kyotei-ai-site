window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f34f516f6526d6e22f1c8caaeb040fd12f378146/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f34f516f6526d6e22f1c8caaeb040fd12f378146/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

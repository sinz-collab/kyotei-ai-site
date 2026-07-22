window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/94b667356ac6fc7ad02f819e145b8d8e35b2d41e/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/94b667356ac6fc7ad02f819e145b8d8e35b2d41e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8095f8ab8aac888389da45541aaa2ac36ba58b7e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8095f8ab8aac888389da45541aaa2ac36ba58b7e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

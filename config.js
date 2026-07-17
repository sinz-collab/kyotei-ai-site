window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/71beaa1f386d76dd43539ff0d07c4c0052d62f51/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/71beaa1f386d76dd43539ff0d07c4c0052d62f51/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

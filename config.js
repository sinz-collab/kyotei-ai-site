window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b4af1d0ba9fba87c4cbf6d6fa18b186560266b2b/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b4af1d0ba9fba87c4cbf6d6fa18b186560266b2b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fc9aabdb32f73ffa407061903a10cd5e2aac58be/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fc9aabdb32f73ffa407061903a10cd5e2aac58be/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

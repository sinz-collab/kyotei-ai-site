window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2c5f72a1f69e4150d4694a0995949029d2ba6bb3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2c5f72a1f69e4150d4694a0995949029d2ba6bb3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

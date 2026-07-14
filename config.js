window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8920fbec1360e35981a90c97f2c8994d63bd8eeb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8920fbec1360e35981a90c97f2c8994d63bd8eeb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

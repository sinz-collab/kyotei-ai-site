window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8e849ca47815ed3cc25c61271e727eb3d97407ee/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8e849ca47815ed3cc25c61271e727eb3d97407ee/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

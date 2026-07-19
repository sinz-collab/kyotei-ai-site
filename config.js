window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cf2916f48cd37cb8f9d9ee1a5d2c71c0fbe1c08c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cf2916f48cd37cb8f9d9ee1a5d2c71c0fbe1c08c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

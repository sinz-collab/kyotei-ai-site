window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/dd77a5815ee2c9798dfd2b4b1558cbbb8d1f7f2e/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/dd77a5815ee2c9798dfd2b4b1558cbbb8d1f7f2e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

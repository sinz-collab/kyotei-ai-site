window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/267d6aa0acf2fbee51c7bf5c011fd4e9863e0210/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/267d6aa0acf2fbee51c7bf5c011fd4e9863e0210/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

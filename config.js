window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/553e1b9d7e53d6a71dc62b1b522410ceb7dba550/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/553e1b9d7e53d6a71dc62b1b522410ceb7dba550/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

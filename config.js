window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d4899dc9425d312ea4bee95c02fa5c6a67396f04/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d4899dc9425d312ea4bee95c02fa5c6a67396f04/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

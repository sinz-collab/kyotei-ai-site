window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2e03dce0f36ad650715070270582f678f2317db2/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2e03dce0f36ad650715070270582f678f2317db2/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

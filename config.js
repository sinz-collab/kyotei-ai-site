window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/776cd56dbf9928e546bd1fca76fb7dc501041a17/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/776cd56dbf9928e546bd1fca76fb7dc501041a17/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

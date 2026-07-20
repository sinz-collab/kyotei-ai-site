window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0ceca4cb16e1e96f0e9e2426f727877c407e4cfc/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0ceca4cb16e1e96f0e9e2426f727877c407e4cfc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

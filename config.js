window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c69e90a9c31cc234058db78db4fff3173b9f38fb/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c69e90a9c31cc234058db78db4fff3173b9f38fb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2b6c1a01b089cf24a5221f0f7c1243e95b7188b8/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2b6c1a01b089cf24a5221f0f7c1243e95b7188b8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

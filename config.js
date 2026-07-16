window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e5f8531ffebf9678366b0e0ffe84b2e5ee70202f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e5f8531ffebf9678366b0e0ffe84b2e5ee70202f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

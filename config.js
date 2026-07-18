window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/28a6d7569defc3d378829f5bb25f03d6138dd37e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/28a6d7569defc3d378829f5bb25f03d6138dd37e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

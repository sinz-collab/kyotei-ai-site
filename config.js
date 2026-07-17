window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9da87f12e2c2fabcbac94b3721c059ed4f402103/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9da87f12e2c2fabcbac94b3721c059ed4f402103/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

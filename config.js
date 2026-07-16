window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c1d70cade18e3179f46dc4ee9fad48fd47da282a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c1d70cade18e3179f46dc4ee9fad48fd47da282a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

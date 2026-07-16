window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cefb267f5b516c0c5d142eb0ac2ca5e89545a3d5/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cefb267f5b516c0c5d142eb0ac2ca5e89545a3d5/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

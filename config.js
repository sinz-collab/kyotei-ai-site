window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b38bca1c7380b112d09ebedf61fa7405c749562c/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b38bca1c7380b112d09ebedf61fa7405c749562c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

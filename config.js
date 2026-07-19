window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bafad34c21d725da4d87748200bd5b8518f9cfdb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bafad34c21d725da4d87748200bd5b8518f9cfdb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

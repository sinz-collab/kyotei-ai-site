window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d51855cf153f43fa5a010e2125a069f83df5f1ac/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d51855cf153f43fa5a010e2125a069f83df5f1ac/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

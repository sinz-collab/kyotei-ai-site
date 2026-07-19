window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b72cd6ac3181a963c72ac125edf3704c4f4e2a52/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b72cd6ac3181a963c72ac125edf3704c4f4e2a52/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

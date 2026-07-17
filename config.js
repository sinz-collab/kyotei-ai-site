window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a3b6472b9bdba840a19a2fd2ddb86e8198c78430/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a3b6472b9bdba840a19a2fd2ddb86e8198c78430/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

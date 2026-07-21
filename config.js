window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2de2be1b3accaeaa03f8a5b7cc672ea7f0697603/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2de2be1b3accaeaa03f8a5b7cc672ea7f0697603/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

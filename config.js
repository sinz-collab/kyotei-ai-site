window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a7f3f562ce89dae55f538766a079b535cb5f8f53/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a7f3f562ce89dae55f538766a079b535cb5f8f53/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

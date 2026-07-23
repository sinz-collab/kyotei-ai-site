window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/392ff5aa56f598e9c90554d74fff093d3b19a1e8/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/392ff5aa56f598e9c90554d74fff093d3b19a1e8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

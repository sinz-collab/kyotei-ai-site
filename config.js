window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/671dee6678c4781a1085789e5f0b78002cdc2358/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/671dee6678c4781a1085789e5f0b78002cdc2358/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

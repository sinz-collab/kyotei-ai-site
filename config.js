window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cc14991fb924f9e545d748d462b21f9ff7440ef7/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cc14991fb924f9e545d748d462b21f9ff7440ef7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

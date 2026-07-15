window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c5ad1b7a9fb775a9640930a34ce6fd1a7ce6dd3d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c5ad1b7a9fb775a9640930a34ce6fd1a7ce6dd3d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

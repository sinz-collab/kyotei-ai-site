window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b573bb58a312e8d040e3d88a2d833dac3f035353/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b573bb58a312e8d040e3d88a2d833dac3f035353/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a7dc5b02d1ed704caf6960ea2e2290dd1fe6e662/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a7dc5b02d1ed704caf6960ea2e2290dd1fe6e662/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a8c91f3e4df041db11bd3d08ccacda2a823c3a07/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a8c91f3e4df041db11bd3d08ccacda2a823c3a07/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

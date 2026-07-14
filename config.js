window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/171f5f14757d9e66da37ea9a55515f615b8f2a16/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/171f5f14757d9e66da37ea9a55515f615b8f2a16/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

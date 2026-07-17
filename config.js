window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7b487a2a2d706264c2ab9cf3d4363a8221e5a04a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7b487a2a2d706264c2ab9cf3d4363a8221e5a04a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

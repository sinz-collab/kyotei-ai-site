window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6b66046493e92240dce8c41715c0ac08cb4de221/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6b66046493e92240dce8c41715c0ac08cb4de221/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

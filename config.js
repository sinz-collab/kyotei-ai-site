window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fcad0574f831e0e223ad5cf3b7a2d3c352be618e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fcad0574f831e0e223ad5cf3b7a2d3c352be618e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

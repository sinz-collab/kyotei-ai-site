window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/33f9a662d3a02b7a8532e9c34974564b4d9c8943/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/33f9a662d3a02b7a8532e9c34974564b4d9c8943/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

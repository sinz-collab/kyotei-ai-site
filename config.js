window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/818d227f5fb822bb6ba8a591e51b5b98176b45ad/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/818d227f5fb822bb6ba8a591e51b5b98176b45ad/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

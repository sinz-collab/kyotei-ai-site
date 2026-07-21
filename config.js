window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/47ee1b06d774154b0b27da0c1ee7275c2d500397/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/47ee1b06d774154b0b27da0c1ee7275c2d500397/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

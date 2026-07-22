window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/14f4736e824657d74955a73e3578de21b16b8b1f/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/14f4736e824657d74955a73e3578de21b16b8b1f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

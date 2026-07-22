window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d6bf7d17ca85aa352b00c1120ca815d1cb6ba1a8/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d6bf7d17ca85aa352b00c1120ca815d1cb6ba1a8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

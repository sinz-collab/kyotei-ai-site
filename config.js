window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d4b2775ca549a46be55fdbbc89137e88c8f06349/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d4b2775ca549a46be55fdbbc89137e88c8f06349/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

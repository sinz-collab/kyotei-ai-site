window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c0242f94872692b011b1fbb671fc158e4fe2238e/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c0242f94872692b011b1fbb671fc158e4fe2238e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

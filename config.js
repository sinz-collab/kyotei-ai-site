window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/426e73da4e1de727c9aea3c55163b7f60480eeba/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/426e73da4e1de727c9aea3c55163b7f60480eeba/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

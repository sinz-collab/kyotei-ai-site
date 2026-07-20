window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9cc6e7562462d85c2b80dae64f0e5330bee8e7ec/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9cc6e7562462d85c2b80dae64f0e5330bee8e7ec/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

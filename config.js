window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/81fc4131c5709e4b6fb2f9035995e90c09bafa2e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/81fc4131c5709e4b6fb2f9035995e90c09bafa2e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

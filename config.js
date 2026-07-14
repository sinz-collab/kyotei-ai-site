window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/178c1a696e7b2241c23f273110c9ece4b7c4a69b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/178c1a696e7b2241c23f273110c9ece4b7c4a69b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

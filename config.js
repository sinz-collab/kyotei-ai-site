window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1c940cb867eb9e4d1233d079c257f1c709b108f7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1c940cb867eb9e4d1233d079c257f1c709b108f7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

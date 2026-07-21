window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9f863a9c5d8219a212511f73cf2a319e6969a898/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9f863a9c5d8219a212511f73cf2a319e6969a898/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

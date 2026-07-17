window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/01ab637ba9d467e412b68726fd63b66b0bc50446/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/01ab637ba9d467e412b68726fd63b66b0bc50446/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

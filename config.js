window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4c2c0219fb530cb171b8d27f056f28bafb660303/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4c2c0219fb530cb171b8d27f056f28bafb660303/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

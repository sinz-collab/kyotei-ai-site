window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/553d34eba40b4e26cbd7783787b3cfb56f83f01e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/553d34eba40b4e26cbd7783787b3cfb56f83f01e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

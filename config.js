window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6e7e8efe25d16f54152ba4a8e43021e73c5b56af/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6e7e8efe25d16f54152ba4a8e43021e73c5b56af/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cc2850f996dcda2c61bbb4673ae6e748de67ab01/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cc2850f996dcda2c61bbb4673ae6e748de67ab01/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

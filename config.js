window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0dc53770ebea2b0d7364d539bbfc8175560478b6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0dc53770ebea2b0d7364d539bbfc8175560478b6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

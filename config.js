window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/27c80d1282920dd5885d05e84298ed4d0f3e449d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/27c80d1282920dd5885d05e84298ed4d0f3e449d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

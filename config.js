window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/dab2ea1fc2b743a07a96ec0ad0059d415191224a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/dab2ea1fc2b743a07a96ec0ad0059d415191224a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

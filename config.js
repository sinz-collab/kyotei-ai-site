window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/00b06c347479d9f946bdd3a7f2764bacd9ff9537/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/00b06c347479d9f946bdd3a7f2764bacd9ff9537/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

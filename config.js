window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/531c950c98fe3e4ba25ba06544a75c5b3669c6c2/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/531c950c98fe3e4ba25ba06544a75c5b3669c6c2/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

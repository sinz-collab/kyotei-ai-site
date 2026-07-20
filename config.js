window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7f00cf6e790fa4b742446320edadf6d815d6ca03/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7f00cf6e790fa4b742446320edadf6d815d6ca03/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1f365d5f5b9e707dfe369248c3fe1e7924f00915/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1f365d5f5b9e707dfe369248c3fe1e7924f00915/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

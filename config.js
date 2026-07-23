window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6a7129c85aedde5ae9dfd445b631506ce2151573/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6a7129c85aedde5ae9dfd445b631506ce2151573/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

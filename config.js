window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8d6fa09fc0e466a0fa3987264b8cffe0753be1bb/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8d6fa09fc0e466a0fa3987264b8cffe0753be1bb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

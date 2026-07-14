window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/eaddba98e5678a3f6808f006b770d5c2f71db8d4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/eaddba98e5678a3f6808f006b770d5c2f71db8d4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ba58d7a1551e919a4b6a3ea4374c1bcff83573fb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ba58d7a1551e919a4b6a3ea4374c1bcff83573fb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

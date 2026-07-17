window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bc0500c584cdd1dacf26a937ea4218682a1eccde/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bc0500c584cdd1dacf26a937ea4218682a1eccde/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

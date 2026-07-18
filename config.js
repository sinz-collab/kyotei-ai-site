window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6e522623abb8049f9efcb3f1e18e6bb1e7ca15a4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6e522623abb8049f9efcb3f1e18e6bb1e7ca15a4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

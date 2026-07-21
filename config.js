window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2928e6661e0232bec14f29c16a48ae3103c29061/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2928e6661e0232bec14f29c16a48ae3103c29061/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

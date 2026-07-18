window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c93bf24d6f4b9cccafb4835f6413b43e70877557/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c93bf24d6f4b9cccafb4835f6413b43e70877557/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/641beaab1d9d385eaf4d72d2a3fb2d057390412f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/641beaab1d9d385eaf4d72d2a3fb2d057390412f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

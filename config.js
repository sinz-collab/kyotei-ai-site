window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ab35a8936a2e6dc53cf1374dc6bd86482e7fe9d3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ab35a8936a2e6dc53cf1374dc6bd86482e7fe9d3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

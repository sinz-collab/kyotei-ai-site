window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0d7d708841794b58780068e124bc1e9c83b13939/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0d7d708841794b58780068e124bc1e9c83b13939/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

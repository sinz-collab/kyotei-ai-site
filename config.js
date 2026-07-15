window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1e7077fb60bbfae83b3edce3e19bdf1e0f476e9a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1e7077fb60bbfae83b3edce3e19bdf1e0f476e9a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

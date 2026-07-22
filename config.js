window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/90fa32de9cefc9d06afdd06dc6c336de0f285fbe/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/90fa32de9cefc9d06afdd06dc6c336de0f285fbe/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

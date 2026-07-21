window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6a167f73027d4eee100cc6fe0bebc9d3017bb477/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6a167f73027d4eee100cc6fe0bebc9d3017bb477/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

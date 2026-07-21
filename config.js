window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f78fa93a6f78d52f389850b58de0310c4de10443/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f78fa93a6f78d52f389850b58de0310c4de10443/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

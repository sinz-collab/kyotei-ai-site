window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c06fddbcc29c6c2c8a83c9bf4acc1b2578c2e50d/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c06fddbcc29c6c2c8a83c9bf4acc1b2578c2e50d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

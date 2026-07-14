window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bb3a02eec4403c778f68b5c88ac975d3eea07099/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bb3a02eec4403c778f68b5c88ac975d3eea07099/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c52dc7e0d1616cee3676cf9d52e0a4fed10d3f60/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c52dc7e0d1616cee3676cf9d52e0a4fed10d3f60/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3ba7c54bde8d3dc608aee63c61c5fcb4af0f4c55/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3ba7c54bde8d3dc608aee63c61c5fcb4af0f4c55/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

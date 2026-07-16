window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2d5191d61f2b0df09365ca636f07efbb983f6d3c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2d5191d61f2b0df09365ca636f07efbb983f6d3c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

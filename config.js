window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ca44b13cffe227824b7e8a09cc53f232d6e20a85/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ca44b13cffe227824b7e8a09cc53f232d6e20a85/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

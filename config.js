window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8076190a69eb08fde7a88d83da3bd09fdb17a80f/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8076190a69eb08fde7a88d83da3bd09fdb17a80f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

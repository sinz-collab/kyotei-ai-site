window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7f81fa88cdd02c339619c0f6b18e3f06b4c0d666/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7f81fa88cdd02c339619c0f6b18e3f06b4c0d666/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/dc6a1c790a3884d9f4a4d4ef4b00ccde5d90d5d5/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/dc6a1c790a3884d9f4a4d4ef4b00ccde5d90d5d5/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

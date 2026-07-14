window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/509d6b7feca91d564cd95fc29a9b0390b8c0730f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/509d6b7feca91d564cd95fc29a9b0390b8c0730f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bf72d023743d0867dac992aeeab25bb0d29eebe9/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bf72d023743d0867dac992aeeab25bb0d29eebe9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

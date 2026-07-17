window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ccb5c8cf8c3852439046dd999ac3904ab6efbd16/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ccb5c8cf8c3852439046dd999ac3904ab6efbd16/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

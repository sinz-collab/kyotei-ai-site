window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8c67e6dacad33d7f632be929d323d6501ffb63ac/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8c67e6dacad33d7f632be929d323d6501ffb63ac/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

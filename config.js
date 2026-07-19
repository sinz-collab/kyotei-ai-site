window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/02c76afd2fb5086f670ba8ea75113455923ee71f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/02c76afd2fb5086f670ba8ea75113455923ee71f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

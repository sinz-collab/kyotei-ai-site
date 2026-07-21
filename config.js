window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/08aae31371bc046dcce762453a762557f0d45b32/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/08aae31371bc046dcce762453a762557f0d45b32/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

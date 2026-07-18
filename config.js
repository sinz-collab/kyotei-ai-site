window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d053f55484e5f7feb91ef333f33b86d419aa59ce/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d053f55484e5f7feb91ef333f33b86d419aa59ce/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

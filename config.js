window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/901ad21a64237d97eb8175b066cf732a8e504571/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/901ad21a64237d97eb8175b066cf732a8e504571/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

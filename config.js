window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a19fb9d3c199e254edd63cfbefc2eb49e47f6064/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a19fb9d3c199e254edd63cfbefc2eb49e47f6064/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

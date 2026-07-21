window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f37e07cce26399b81ad95bcba9d30cf102c284f8/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f37e07cce26399b81ad95bcba9d30cf102c284f8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

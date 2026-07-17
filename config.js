window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6a54af6bdad7331cd7b32d1d82d5129e0ef80fea/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6a54af6bdad7331cd7b32d1d82d5129e0ef80fea/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

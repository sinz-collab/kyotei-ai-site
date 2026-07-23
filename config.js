window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/698e91573433cdf7456af88d031549effeedfe4f/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/698e91573433cdf7456af88d031549effeedfe4f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

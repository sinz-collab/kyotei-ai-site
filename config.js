window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/af664075b19e014d72e3a0628cf2aee2219c93e0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/af664075b19e014d72e3a0628cf2aee2219c93e0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

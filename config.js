window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2472b89c489053c90a23594d81c36c397714881d/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2472b89c489053c90a23594d81c36c397714881d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

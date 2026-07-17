window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/01af181ddec7b02537fc1bd01a4848e7ee297e0b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/01af181ddec7b02537fc1bd01a4848e7ee297e0b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

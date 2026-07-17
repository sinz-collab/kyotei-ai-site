window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/339790f57465c0e36eb1ce75bcd5c7efd0ce776d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/339790f57465c0e36eb1ce75bcd5c7efd0ce776d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

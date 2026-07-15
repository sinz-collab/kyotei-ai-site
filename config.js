window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2e7e7ef2608b2859eb4a7d1db8f1fb9dc94b28c5/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2e7e7ef2608b2859eb4a7d1db8f1fb9dc94b28c5/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

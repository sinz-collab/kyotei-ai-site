window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/eded95f4cada617bc7c2c50b41fd913dee2f232f/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/eded95f4cada617bc7c2c50b41fd913dee2f232f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

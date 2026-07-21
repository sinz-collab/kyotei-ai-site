window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0061df6525a90c19067ba98765f3e47a08dc6d57/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0061df6525a90c19067ba98765f3e47a08dc6d57/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

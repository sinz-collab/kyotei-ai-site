window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7574c63b3537bb6b0c3583c1beff7f91020cbb56/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7574c63b3537bb6b0c3583c1beff7f91020cbb56/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7bc60ff3b391d1f7d5dccaed886368e97f395aa2/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7bc60ff3b391d1f7d5dccaed886368e97f395aa2/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

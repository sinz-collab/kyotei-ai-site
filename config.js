window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a72098272754bcb8d0f795408a7b86ba13d5ee18/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a72098272754bcb8d0f795408a7b86ba13d5ee18/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

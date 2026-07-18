window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6c83f1e98cd7bc1d2d147ae00962b791dc43f294/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6c83f1e98cd7bc1d2d147ae00962b791dc43f294/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

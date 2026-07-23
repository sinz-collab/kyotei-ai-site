window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fa277a5664858d52cc1f30305035898bfe15864d/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fa277a5664858d52cc1f30305035898bfe15864d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

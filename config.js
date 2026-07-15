window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c580fde69d8e024fd2ced2d5de219907a4e72d48/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c580fde69d8e024fd2ced2d5de219907a4e72d48/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

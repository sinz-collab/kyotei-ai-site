window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4e56a16c0baf70e6d0fff0ef6301d9ff6c6f1fbe/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4e56a16c0baf70e6d0fff0ef6301d9ff6c6f1fbe/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

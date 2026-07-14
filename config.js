window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/76ea30ca11dcb27877867f9f300ec39492bcac3b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/76ea30ca11dcb27877867f9f300ec39492bcac3b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

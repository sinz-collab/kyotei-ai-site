window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/09b5f3c1e5ba1cee579cf37510c8e73d53e97698/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/09b5f3c1e5ba1cee579cf37510c8e73d53e97698/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

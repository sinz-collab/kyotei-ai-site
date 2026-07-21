window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/30619c39cba58456fad8622c6fb0add90b6d32c3/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/30619c39cba58456fad8622c6fb0add90b6d32c3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

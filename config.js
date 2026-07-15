window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2a1eec249e1697db7e4cfe52359c2318dd9cde2b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2a1eec249e1697db7e4cfe52359c2318dd9cde2b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

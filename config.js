window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a2f772f1b8a967ffb33830ec5ac5ce9082791f23/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a2f772f1b8a967ffb33830ec5ac5ce9082791f23/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

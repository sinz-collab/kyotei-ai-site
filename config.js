window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/791e4bd2a67cd6dd4485599af872f201da86bce0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/791e4bd2a67cd6dd4485599af872f201da86bce0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

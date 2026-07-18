window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3fb4d67bd1559d5cbec6c561c4db4c99a35ffdd8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3fb4d67bd1559d5cbec6c561c4db4c99a35ffdd8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

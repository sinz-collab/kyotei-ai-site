window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9a3290305682536f2b7de5d7bdb271bda18c611f/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9a3290305682536f2b7de5d7bdb271bda18c611f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

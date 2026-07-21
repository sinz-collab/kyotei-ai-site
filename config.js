window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7a340c2019222a02092e29b81eca375581e770da/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7a340c2019222a02092e29b81eca375581e770da/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

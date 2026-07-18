window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5e3440fe47890f70190c76b8a26bb32e080835b7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5e3440fe47890f70190c76b8a26bb32e080835b7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

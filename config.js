window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/55d8895589266c4a04987304f89bc70c7db93f71/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/55d8895589266c4a04987304f89bc70c7db93f71/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

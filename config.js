window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fced58a48b061a50e7d3e6a80412a9f3dbef9efa/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fced58a48b061a50e7d3e6a80412a9f3dbef9efa/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

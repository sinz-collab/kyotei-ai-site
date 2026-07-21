window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/07100b0d52ccf5376806f165b0ca814fb9a44ee8/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/07100b0d52ccf5376806f165b0ca814fb9a44ee8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

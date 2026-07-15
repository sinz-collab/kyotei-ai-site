window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6a3d02bc060efcde76cac8c7ebfed095e8007e8f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6a3d02bc060efcde76cac8c7ebfed095e8007e8f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

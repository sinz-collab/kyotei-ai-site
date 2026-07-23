window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bfddfd8d6859effac4453b4c9d0c3e2259beb3c6/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bfddfd8d6859effac4453b4c9d0c3e2259beb3c6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

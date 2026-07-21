window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2ec0cbece3b227939a741ed6390f1355c83bac45/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2ec0cbece3b227939a741ed6390f1355c83bac45/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

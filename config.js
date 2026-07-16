window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/455f04d50b6c84bc4c133662694596c85bfd88a6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/455f04d50b6c84bc4c133662694596c85bfd88a6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

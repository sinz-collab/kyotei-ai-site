window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2475e276d0c7e226e62c955bf9d8a6f4704d1f76/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2475e276d0c7e226e62c955bf9d8a6f4704d1f76/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

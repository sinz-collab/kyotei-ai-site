window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fd6404eecf41825d0e36bcf0e4e3b8d008fd1ff8/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fd6404eecf41825d0e36bcf0e4e3b8d008fd1ff8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

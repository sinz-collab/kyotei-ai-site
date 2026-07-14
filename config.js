window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5a3b5818f77a054819719fbcf69fd1fbdde2af27/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5a3b5818f77a054819719fbcf69fd1fbdde2af27/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

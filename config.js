window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/59c4e107f1ad851ec3634f6c307f88c653269b66/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/59c4e107f1ad851ec3634f6c307f88c653269b66/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

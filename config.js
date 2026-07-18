window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5787dfe2d6f7bb042a7a2ff4d9b7c3195594b852/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5787dfe2d6f7bb042a7a2ff4d9b7c3195594b852/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

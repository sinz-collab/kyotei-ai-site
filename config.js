window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/70ad75c036d5a5c4738bb64dee2b73b270bee80a/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/70ad75c036d5a5c4738bb64dee2b73b270bee80a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/49d7a34a8feebd0c23820330f9e8cc8ab1e2ff7c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/49d7a34a8feebd0c23820330f9e8cc8ab1e2ff7c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

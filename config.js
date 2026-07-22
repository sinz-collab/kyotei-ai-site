window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f80d76076726529517451a8b1a6419a2e65df9ad/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f80d76076726529517451a8b1a6419a2e65df9ad/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

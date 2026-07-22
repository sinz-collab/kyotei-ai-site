window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5fb10f86f9e4a98d41f04123b5ad3e4eab7c1f09/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5fb10f86f9e4a98d41f04123b5ad3e4eab7c1f09/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

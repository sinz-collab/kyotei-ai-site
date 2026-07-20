window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7a7c9d4ca3161e6cc6b478cfb9c7f0bf4a0d8a33/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7a7c9d4ca3161e6cc6b478cfb9c7f0bf4a0d8a33/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

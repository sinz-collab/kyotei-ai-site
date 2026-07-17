window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/80fef000ee5f7fa4689f4de6eb7f5161c0515406/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/80fef000ee5f7fa4689f4de6eb7f5161c0515406/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

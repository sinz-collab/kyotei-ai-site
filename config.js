window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fb3a9e4f5814cd06b69751f25779e96774d01df6/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fb3a9e4f5814cd06b69751f25779e96774d01df6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

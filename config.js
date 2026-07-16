window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f36d4484af0c0c327b0aae461f3eec72654bd4fb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f36d4484af0c0c327b0aae461f3eec72654bd4fb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

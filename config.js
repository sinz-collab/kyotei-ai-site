window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4932c3e1eff5fa9e08d201ea6de931b858021a88/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4932c3e1eff5fa9e08d201ea6de931b858021a88/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/83e4f804a98e0cf0248732d0170e846e13ed8bd1/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/83e4f804a98e0cf0248732d0170e846e13ed8bd1/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

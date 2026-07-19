window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e15a941bcc8722895a49b66b1b62bfced1864b1a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e15a941bcc8722895a49b66b1b62bfced1864b1a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

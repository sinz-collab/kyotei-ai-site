window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fa1e822f67835eadd1e7672f40eb5bfdcb197722/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fa1e822f67835eadd1e7672f40eb5bfdcb197722/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

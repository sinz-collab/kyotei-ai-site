window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fa6b78c766e61668fd684cd103aeef84c275de51/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fa6b78c766e61668fd684cd103aeef84c275de51/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

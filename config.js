window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c18cdcc5086bfe50dc396479607bd8a82b6aacd3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c18cdcc5086bfe50dc396479607bd8a82b6aacd3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

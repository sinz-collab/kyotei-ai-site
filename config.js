window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6fc411936aed3a161a4ecd6056f17de5466a1336/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6fc411936aed3a161a4ecd6056f17de5466a1336/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

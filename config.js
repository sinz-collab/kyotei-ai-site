window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/94cf717b24855c387d955db7c44e60ed800f2675/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/94cf717b24855c387d955db7c44e60ed800f2675/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

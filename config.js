window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4249841a6cd9f6295429eb9bd01b0a4c35d20f02/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4249841a6cd9f6295429eb9bd01b0a4c35d20f02/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

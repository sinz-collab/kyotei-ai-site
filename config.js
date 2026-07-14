window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c5f491d43fea3011c8c3fe554ca44f00d46d6528/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c5f491d43fea3011c8c3fe554ca44f00d46d6528/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

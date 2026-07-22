window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/dcc1b966eb8ae057536d00877fce9c22f8aa2a02/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/dcc1b966eb8ae057536d00877fce9c22f8aa2a02/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

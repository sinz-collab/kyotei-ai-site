window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d8a09d6aabf3b5eb56bcde4ac9de806cc317f4cc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d8a09d6aabf3b5eb56bcde4ac9de806cc317f4cc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

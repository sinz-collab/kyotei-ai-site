window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f5a6de6e92ca4ad37e3e2e7b9ca0f04f23a414fc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f5a6de6e92ca4ad37e3e2e7b9ca0f04f23a414fc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

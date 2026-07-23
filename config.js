window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d905c0b076b3b79f84ab86f4358f54df94df7e3e/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d905c0b076b3b79f84ab86f4358f54df94df7e3e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c52e5fe2477fb54b04bff8fc52b642bcd878be56/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c52e5fe2477fb54b04bff8fc52b642bcd878be56/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

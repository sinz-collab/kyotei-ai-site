window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0752c5dc5365f168f9574ed029e31d72e691ab95/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0752c5dc5365f168f9574ed029e31d72e691ab95/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3a52dadb76049921228d59ab4e5c6e09245b2764/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3a52dadb76049921228d59ab4e5c6e09245b2764/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

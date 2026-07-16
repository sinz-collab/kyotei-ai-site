window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d80bdfb6885cb191bdb35d7899109c0be3b4fb7b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d80bdfb6885cb191bdb35d7899109c0be3b4fb7b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

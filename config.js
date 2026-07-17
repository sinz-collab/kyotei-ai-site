window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b26bff5a506bf556a91b551f9aafbdf15be1933c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b26bff5a506bf556a91b551f9aafbdf15be1933c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

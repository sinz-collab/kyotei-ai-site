window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/95e62a97d4cbb8e9798480b0cd194d954b0e2c52/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/95e62a97d4cbb8e9798480b0cd194d954b0e2c52/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

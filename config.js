window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/94ab8fb3ad6c57b7d72a49ddb825176c6261603e/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/94ab8fb3ad6c57b7d72a49ddb825176c6261603e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6cf1cca5d928f450239504876640d74a2b4db415/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6cf1cca5d928f450239504876640d74a2b4db415/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

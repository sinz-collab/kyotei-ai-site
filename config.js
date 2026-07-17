window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/301a1e54bf092da63d86a84ec0d46815a4a6a864/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/301a1e54bf092da63d86a84ec0d46815a4a6a864/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

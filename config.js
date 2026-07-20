window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/77e999b2e647589454ee0f201c060d618f23d131/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/77e999b2e647589454ee0f201c060d618f23d131/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

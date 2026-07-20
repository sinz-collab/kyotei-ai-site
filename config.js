window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/326439ff1fe5201690665eb01ea998c43adda836/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/326439ff1fe5201690665eb01ea998c43adda836/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

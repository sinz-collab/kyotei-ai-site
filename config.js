window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2c6be521bfc659634815ecf9b7310effd83c0c0f/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2c6be521bfc659634815ecf9b7310effd83c0c0f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

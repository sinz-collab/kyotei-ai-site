window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/154b1a9c15d175018cff385cde68d69380a8d233/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/154b1a9c15d175018cff385cde68d69380a8d233/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

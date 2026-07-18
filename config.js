window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/87e95173ad05d8e3923a3dd906035345f06ff9da/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/87e95173ad05d8e3923a3dd906035345f06ff9da/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

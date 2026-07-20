window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a4cbddd83474e79b933932add693e469d008d387/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a4cbddd83474e79b933932add693e469d008d387/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

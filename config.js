window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f82cfdb80996785cb30ebf1a0bab012e2ddfdcda/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f82cfdb80996785cb30ebf1a0bab012e2ddfdcda/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

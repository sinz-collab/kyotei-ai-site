window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cda8a4f5fe836c7f48b8346396e0d9728d1d7bce/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cda8a4f5fe836c7f48b8346396e0d9728d1d7bce/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

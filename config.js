window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/88c07bda3bfe1ddf5ed0e7cbbf4fe15c4bc5d9d8/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/88c07bda3bfe1ddf5ed0e7cbbf4fe15c4bc5d9d8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

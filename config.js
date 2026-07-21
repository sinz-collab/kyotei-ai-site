window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8efd5d5c8aec7cb16436e157e3f29dc89d50a048/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8efd5d5c8aec7cb16436e157e3f29dc89d50a048/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8a3e6d09d1fa9bcb0cbaa16b861d7da7aafa160d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8a3e6d09d1fa9bcb0cbaa16b861d7da7aafa160d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

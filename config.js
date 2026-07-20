window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/00d386ecd4c1b7330c7b9618329ff3cf38769df4/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/00d386ecd4c1b7330c7b9618329ff3cf38769df4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

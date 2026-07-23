window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e2c923ca8caf4a6302dccc00cb4bc40371a0a410/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e2c923ca8caf4a6302dccc00cb4bc40371a0a410/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

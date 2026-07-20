window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/13973b7e13e4551ed55d36e97509ed97bc57626a/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/13973b7e13e4551ed55d36e97509ed97bc57626a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

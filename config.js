window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8fc692bde57527937cab9b0fef0508e7002d0036/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8fc692bde57527937cab9b0fef0508e7002d0036/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7e94ec07d76f70be261b4000e5c74df2bbc9ad63/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7e94ec07d76f70be261b4000e5c74df2bbc9ad63/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

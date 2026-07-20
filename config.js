window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/36623790bd54b80c0752188cab94015bb293a0e1/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/36623790bd54b80c0752188cab94015bb293a0e1/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

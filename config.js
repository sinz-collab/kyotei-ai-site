window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ce85ffe0b98b94b0b3f476cdcc474c51500b707f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ce85ffe0b98b94b0b3f476cdcc474c51500b707f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

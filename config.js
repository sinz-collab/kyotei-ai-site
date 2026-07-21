window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cd7ee1b65225d38b5ee71c5aba9905eac9ba0d77/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cd7ee1b65225d38b5ee71c5aba9905eac9ba0d77/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

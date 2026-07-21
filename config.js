window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1efe466d9b857eb85e9ade9b8306c9eeef4a9fbc/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1efe466d9b857eb85e9ade9b8306c9eeef4a9fbc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

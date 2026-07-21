window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ec9a4e8916949ed91dea2a69c52222cbc896a127/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ec9a4e8916949ed91dea2a69c52222cbc896a127/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

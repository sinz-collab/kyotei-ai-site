window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ecb2ef6e9f7c9e5982c0704c27d48ff116f90e29/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ecb2ef6e9f7c9e5982c0704c27d48ff116f90e29/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

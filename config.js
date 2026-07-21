window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c96618f902c5e311b3cf0df75ec4ae5b0d9e4ae3/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c96618f902c5e311b3cf0df75ec4ae5b0d9e4ae3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

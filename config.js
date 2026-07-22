window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/339302a108d8d444c3f928d566586ace393491c0/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/339302a108d8d444c3f928d566586ace393491c0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

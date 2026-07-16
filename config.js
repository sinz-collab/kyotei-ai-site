window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e277a0afc29b84b41d0bdce16210548d6ce7a65f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e277a0afc29b84b41d0bdce16210548d6ce7a65f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/37ccbf8b24f409cc0e629c0a522eb67361a0a4bc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/37ccbf8b24f409cc0e629c0a522eb67361a0a4bc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

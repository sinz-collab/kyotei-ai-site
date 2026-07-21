window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/487ac4fc49fbae79a38267d4798762defb59364b/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/487ac4fc49fbae79a38267d4798762defb59364b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

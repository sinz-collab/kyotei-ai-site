window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/198cb364beb8b85ebe997e2ea780ad81621b8989/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/198cb364beb8b85ebe997e2ea780ad81621b8989/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

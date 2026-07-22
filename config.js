window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/58fda9f9829adf45ed673d29bff4d02e2aad87fb/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/58fda9f9829adf45ed673d29bff4d02e2aad87fb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

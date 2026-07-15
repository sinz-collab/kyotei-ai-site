window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5079bf0f5c907d0a204ed8e7d64891a9429b83d9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5079bf0f5c907d0a204ed8e7d64891a9429b83d9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

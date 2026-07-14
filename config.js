window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/576397eb5e2ab7dd6d8ec0f57c26ea3187754b8a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/576397eb5e2ab7dd6d8ec0f57c26ea3187754b8a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

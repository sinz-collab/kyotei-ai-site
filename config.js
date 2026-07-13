window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b0f152ea09a1c7e1451c8ebfbc6663dd6ff2af2a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b0f152ea09a1c7e1451c8ebfbc6663dd6ff2af2a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

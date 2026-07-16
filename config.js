window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/94ed3003ec36fe0ce0aab890d2703a09dd6d4816/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/94ed3003ec36fe0ce0aab890d2703a09dd6d4816/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

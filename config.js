window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/85aafd3d6dccaba5ef929bae4a8f3ab6e24f2395/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/85aafd3d6dccaba5ef929bae4a8f3ab6e24f2395/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/613626c20da8017c376aed07e058a7c497a96488/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/613626c20da8017c376aed07e058a7c497a96488/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

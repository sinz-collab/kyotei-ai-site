window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/21c2165f39f42f18031a81f79628bfff40fb8d14/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/21c2165f39f42f18031a81f79628bfff40fb8d14/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/48cc4138305e1facbfbccf3b6893ef4cfccc253b/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/48cc4138305e1facbfbccf3b6893ef4cfccc253b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

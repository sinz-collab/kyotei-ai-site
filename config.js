window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/05fcbd6f15dafce5cb7f24e94d9ab0b2982ca961/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/05fcbd6f15dafce5cb7f24e94d9ab0b2982ca961/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

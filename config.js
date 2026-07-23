window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e5b61961a176d0274cdaa353503c2df83a4f6bbf/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e5b61961a176d0274cdaa353503c2df83a4f6bbf/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

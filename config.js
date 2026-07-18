window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fa59db147c28f97d42e4dfb109c304c8173ff156/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fa59db147c28f97d42e4dfb109c304c8173ff156/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

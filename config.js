window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/dc1dab56011306978e982e004a8a965c5bb9fe5f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/dc1dab56011306978e982e004a8a965c5bb9fe5f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

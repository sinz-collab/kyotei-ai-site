window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c270aef2da880efba711bc49cc753077a17d3c6b/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c270aef2da880efba711bc49cc753077a17d3c6b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0529b44ea8d8d6b059d18d4da8e275af567b5f39/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0529b44ea8d8d6b059d18d4da8e275af567b5f39/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

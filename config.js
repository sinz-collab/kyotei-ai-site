window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/25144e4dada13b82d097cf85583cec63541183e9/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/25144e4dada13b82d097cf85583cec63541183e9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/06e862698ba17174c6fa75e4c00c1fb972a6bd30/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/06e862698ba17174c6fa75e4c00c1fb972a6bd30/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

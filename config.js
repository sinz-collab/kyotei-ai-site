window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b1ceef2c9240a83b7fc27878b4bdb6e6e7b11f5c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b1ceef2c9240a83b7fc27878b4bdb6e6e7b11f5c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

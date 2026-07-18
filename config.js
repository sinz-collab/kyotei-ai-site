window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/753fb136bc2343c42ae7b2b18e8e652d404339aa/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/753fb136bc2343c42ae7b2b18e8e652d404339aa/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

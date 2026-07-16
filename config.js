window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d2ea1000260b43d785f199d25a1ca170ec99cc68/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d2ea1000260b43d785f199d25a1ca170ec99cc68/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

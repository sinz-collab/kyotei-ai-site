window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/59ebc3cc288a0ebd7456a2f711fa7f765ab9dc15/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/59ebc3cc288a0ebd7456a2f711fa7f765ab9dc15/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

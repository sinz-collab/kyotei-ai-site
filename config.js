window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6e701419f5f504174725baeefcd9676455f6da49/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6e701419f5f504174725baeefcd9676455f6da49/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

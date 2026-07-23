window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/03b49288cd58a0ea8f2350a5ba5a5bfd850d23ac/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/03b49288cd58a0ea8f2350a5ba5a5bfd850d23ac/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

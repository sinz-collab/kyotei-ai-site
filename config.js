window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/60414bbf09be047f58da6f5ec7718d26c373ccf0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/60414bbf09be047f58da6f5ec7718d26c373ccf0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

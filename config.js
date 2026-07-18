window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e7b1ccb86952991830079ff34ac18d432d1e2a20/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e7b1ccb86952991830079ff34ac18d432d1e2a20/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

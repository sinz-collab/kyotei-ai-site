window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/89bd1b355168f2d4449fd9f5514cc385301632b1/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/89bd1b355168f2d4449fd9f5514cc385301632b1/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

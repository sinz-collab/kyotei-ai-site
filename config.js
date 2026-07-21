window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6f36154ca47123052bdb9776411816f4752e8aa3/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6f36154ca47123052bdb9776411816f4752e8aa3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

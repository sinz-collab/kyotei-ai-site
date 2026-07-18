window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4416dbfdb3ec89ac916c5bef2b007d1ff076f044/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4416dbfdb3ec89ac916c5bef2b007d1ff076f044/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

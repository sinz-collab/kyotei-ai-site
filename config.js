window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bb3403089bf7f2517e130c2b42fa55591f0e3857/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bb3403089bf7f2517e130c2b42fa55591f0e3857/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

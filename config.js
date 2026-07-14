window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7dc825fe59792ca79cdedb67e975b39de8903b01/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7dc825fe59792ca79cdedb67e975b39de8903b01/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

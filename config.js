window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/715e4ed591d771de13b093bc0ff2f751c70c7171/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/715e4ed591d771de13b093bc0ff2f751c70c7171/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

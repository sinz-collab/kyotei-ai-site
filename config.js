window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/315547a924f4291a7b5a39bea9bdf27558f7bfac/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/315547a924f4291a7b5a39bea9bdf27558f7bfac/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

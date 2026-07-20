window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ecd7fab38f48afb27ce624ef434f64d2dd156587/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ecd7fab38f48afb27ce624ef434f64d2dd156587/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

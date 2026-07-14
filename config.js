window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9a8be0b23e51308af3e5ee6d15f98e5e48350ce9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9a8be0b23e51308af3e5ee6d15f98e5e48350ce9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

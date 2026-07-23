window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/386c1a0d200278b17c0bac07de5ced0c46e51f8d/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/386c1a0d200278b17c0bac07de5ced0c46e51f8d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

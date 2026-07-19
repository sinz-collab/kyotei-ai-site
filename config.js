window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/382bd519cec06c0457fd43f878e8b445a77cca1f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/382bd519cec06c0457fd43f878e8b445a77cca1f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

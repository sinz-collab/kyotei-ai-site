window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6c3d6113b9c79711f616f35dafe33a4e82ec90fb/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6c3d6113b9c79711f616f35dafe33a4e82ec90fb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

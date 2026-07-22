window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d9e9a418b2b8d041ef75743e8d8423dbf7e0dd53/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d9e9a418b2b8d041ef75743e8d8423dbf7e0dd53/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

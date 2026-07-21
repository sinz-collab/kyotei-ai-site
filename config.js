window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/653e86f44f00927b62db09a1e0cb3d803a373a6d/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/653e86f44f00927b62db09a1e0cb3d803a373a6d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

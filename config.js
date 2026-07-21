window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1425e0b6872522846661d2d310859d7c2740c098/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1425e0b6872522846661d2d310859d7c2740c098/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

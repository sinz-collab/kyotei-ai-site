window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/683c06878a29b4a445e4ea51cb9f56f5b3d3d818/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/683c06878a29b4a445e4ea51cb9f56f5b3d3d818/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

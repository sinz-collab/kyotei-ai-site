window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fc51f1aec260da3924c86c91a5ada010cfc4e3d3/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fc51f1aec260da3924c86c91a5ada010cfc4e3d3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

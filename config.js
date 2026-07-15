window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/930548104d2d48e34310e4f0fc1837040ddfcc3d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/930548104d2d48e34310e4f0fc1837040ddfcc3d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

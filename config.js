window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3f9c2a79e62c9ae8caf5d54756110c3dd1d3e330/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3f9c2a79e62c9ae8caf5d54756110c3dd1d3e330/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

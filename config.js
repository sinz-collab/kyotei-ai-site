window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/72b8446ae2d0a95304da83585e2639b2c096a0eb/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/72b8446ae2d0a95304da83585e2639b2c096a0eb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

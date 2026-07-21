window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8365057aa20689e2e2a10bb713c22548fdb1d3d4/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8365057aa20689e2e2a10bb713c22548fdb1d3d4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

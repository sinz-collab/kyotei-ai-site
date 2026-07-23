window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6b896829b997c3707538615748347ee6b3d3903a/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6b896829b997c3707538615748347ee6b3d3903a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

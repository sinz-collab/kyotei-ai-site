window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d252dc50a84a9d51a3d13e0ba15a1550f21c7a44/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d252dc50a84a9d51a3d13e0ba15a1550f21c7a44/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

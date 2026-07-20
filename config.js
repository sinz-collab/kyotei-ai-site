window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7c28d5d01f7f25ab3f088d839f883282a00abc02/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7c28d5d01f7f25ab3f088d839f883282a00abc02/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

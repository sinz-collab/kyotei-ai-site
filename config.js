window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b0904dd02b3d27206ae0258b172bf25e3e61ef03/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b0904dd02b3d27206ae0258b172bf25e3e61ef03/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0e5e9f0c5524344ff9d691b004896eaff36173ac/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0e5e9f0c5524344ff9d691b004896eaff36173ac/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

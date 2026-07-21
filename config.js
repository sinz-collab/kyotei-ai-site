window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3c06d8db7d0cb4b2d27ae0d83fb1690b7c963be0/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3c06d8db7d0cb4b2d27ae0d83fb1690b7c963be0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

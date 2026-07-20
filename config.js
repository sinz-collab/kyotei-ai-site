window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f6b04b75f26f45acdc43e3d64504acbd539059ec/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f6b04b75f26f45acdc43e3d64504acbd539059ec/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

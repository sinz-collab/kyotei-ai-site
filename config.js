window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2fb6a74d9153c2fe51c1241f28079ac9783a2a29/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2fb6a74d9153c2fe51c1241f28079ac9783a2a29/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3a4be64f6e69ad6a6acc1c72c8f66950498edbc7/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3a4be64f6e69ad6a6acc1c72c8f66950498edbc7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

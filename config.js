window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/290d0ae31c8442d59763c5df4f11f4117f905b6f/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/290d0ae31c8442d59763c5df4f11f4117f905b6f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

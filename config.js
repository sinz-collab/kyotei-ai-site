window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/64af2c502c2acdb6a8446ea7870506113e50d282/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/64af2c502c2acdb6a8446ea7870506113e50d282/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

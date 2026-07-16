window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/206d7e8a51478925d16b9e5475f047d0e12c31d6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/206d7e8a51478925d16b9e5475f047d0e12c31d6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

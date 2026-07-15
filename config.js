window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/16fccbc1e08aff8f138d80beacd0f80cb5f4faf0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/16fccbc1e08aff8f138d80beacd0f80cb5f4faf0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7e2512403436108600e710b1ec51cffbb0b9b5eb/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7e2512403436108600e710b1ec51cffbb0b9b5eb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

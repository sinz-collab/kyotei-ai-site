window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7f0b32c45d1af593e0adc26ec34a8355658298bc/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7f0b32c45d1af593e0adc26ec34a8355658298bc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f6e580f5c5dac08c511000f365cf3fdc1e166efc/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f6e580f5c5dac08c511000f365cf3fdc1e166efc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

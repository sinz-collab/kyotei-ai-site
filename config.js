window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/adea5d86dc2556c2cba63cbbb2aed28e00480117/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/adea5d86dc2556c2cba63cbbb2aed28e00480117/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

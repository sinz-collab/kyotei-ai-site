window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4adc80a162e4337f04970fdcb2f0a8b85ebc5020/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4adc80a162e4337f04970fdcb2f0a8b85ebc5020/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

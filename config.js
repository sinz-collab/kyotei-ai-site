window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e6a2591a697c4f1b7024446adc91e64d740a5adf/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e6a2591a697c4f1b7024446adc91e64d740a5adf/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

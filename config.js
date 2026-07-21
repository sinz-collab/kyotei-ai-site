window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9caeafba6fe02db8c4f3b94764d2d44842b1f830/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9caeafba6fe02db8c4f3b94764d2d44842b1f830/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

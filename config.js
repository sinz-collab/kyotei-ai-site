window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/91fa5da0dca7d85633bc208f0b977ec6a061be6d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/91fa5da0dca7d85633bc208f0b977ec6a061be6d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

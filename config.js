window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9d6b3891f9f5a2cca0c9b942789c639af498f3c9/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9d6b3891f9f5a2cca0c9b942789c639af498f3c9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);


window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9d9b4096a0b66fad531f13ef889c828e8054bc50/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9d9b4096a0b66fad531f13ef889c828e8054bc50/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

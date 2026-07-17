window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f50ee8c9fe02270cef1c73b794495d1fbb8aa8eb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f50ee8c9fe02270cef1c73b794495d1fbb8aa8eb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

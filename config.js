window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/16b17a40bda53bbcc4957e9b8ab67ac15a0b215b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/16b17a40bda53bbcc4957e9b8ab67ac15a0b215b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

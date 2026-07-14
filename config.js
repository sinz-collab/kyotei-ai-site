window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5c2d8d54982d4b3c15fa8b503f04370e27f56fee/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5c2d8d54982d4b3c15fa8b503f04370e27f56fee/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

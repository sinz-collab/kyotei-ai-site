window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d4568d5333a46c53141b4fef4fb4c0ece5377f56/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d4568d5333a46c53141b4fef4fb4c0ece5377f56/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

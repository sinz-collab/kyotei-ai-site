window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/746fa8d69bbec0cc89285508eaa1bf4ac0a588ca/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/746fa8d69bbec0cc89285508eaa1bf4ac0a588ca/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

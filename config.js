window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0a8fad603b32843a31bb2f6e0b1797fa337e47b0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0a8fad603b32843a31bb2f6e0b1797fa337e47b0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

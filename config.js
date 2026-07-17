window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/77ed2ee2e6d09f2b319b20858813eabadfa45ad9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/77ed2ee2e6d09f2b319b20858813eabadfa45ad9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

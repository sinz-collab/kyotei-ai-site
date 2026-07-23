window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/94d9b3b2fd779bafd2669f44653fc450a2222ae2/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/94d9b3b2fd779bafd2669f44653fc450a2222ae2/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/16f58ba2a1813a34ad7b221e36502dc66930f101/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/16f58ba2a1813a34ad7b221e36502dc66930f101/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bbe6f7283221664e37e524356cf4fb622aeaa0fc/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bbe6f7283221664e37e524356cf4fb622aeaa0fc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

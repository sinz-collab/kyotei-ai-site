window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d8e3181b674eb4f0a993b1b64e5e8e48cf3a0055/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d8e3181b674eb4f0a993b1b64e5e8e48cf3a0055/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

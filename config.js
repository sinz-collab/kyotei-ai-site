window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6b55a3548a1e99fcedcb337dec1a7fe6ae839a5a/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6b55a3548a1e99fcedcb337dec1a7fe6ae839a5a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

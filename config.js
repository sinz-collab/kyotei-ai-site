window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/78b2e811b06733cac41672c2f8b2b4a7132cad6e/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/78b2e811b06733cac41672c2f8b2b4a7132cad6e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

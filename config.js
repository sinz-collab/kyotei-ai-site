window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

// Set this to the VPS public endpoint. If omitted, the Git repository backup is used.
window.KYOTEI_LIVE_DATA_BASES = window.KYOTEI_LIVE_DATA_BASES || [];

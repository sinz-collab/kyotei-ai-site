window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b7a34ad008f5d4f56402c55ec8a37409c413c26a/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b7a34ad008f5d4f56402c55ec8a37409c413c26a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

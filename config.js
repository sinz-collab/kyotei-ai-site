window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/15e127cd5fcb9775d4b11cf81a1256b084bd051c/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/15e127cd5fcb9775d4b11cf81a1256b084bd051c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

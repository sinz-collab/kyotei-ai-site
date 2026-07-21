window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/33738be79557b4b8aab16f68fe885914699c223b/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/33738be79557b4b8aab16f68fe885914699c223b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

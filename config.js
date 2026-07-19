window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a4bed158ebe714615b2ced3a4dbbefcea136d1b0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a4bed158ebe714615b2ced3a4dbbefcea136d1b0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/986c8d87c1951e323d4b69ddcdcd4ce17c417b0f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/986c8d87c1951e323d4b69ddcdcd4ce17c417b0f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

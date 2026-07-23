window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/23fcb0747b338fb0d9357818ca9d257db5ae95b3/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/23fcb0747b338fb0d9357818ca9d257db5ae95b3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

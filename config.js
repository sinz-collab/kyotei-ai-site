window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8aa571039f743729c38ad5bf4a1b0c5d4c60e91d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8aa571039f743729c38ad5bf4a1b0c5d4c60e91d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

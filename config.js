window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/00bbc3a3d2573a31749af7ded37adc89b3cd8869/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/00bbc3a3d2573a31749af7ded37adc89b3cd8869/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b110dca7869d387964500781eec2a9fa8f9c3672/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b110dca7869d387964500781eec2a9fa8f9c3672/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

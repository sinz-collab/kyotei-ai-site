window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/dec3d17061b4c7e99ea6da4791141759a2821632/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/dec3d17061b4c7e99ea6da4791141759a2821632/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/792f0e0dda4aa9dedfb0d02d0eca35c7ebee83f0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/792f0e0dda4aa9dedfb0d02d0eca35c7ebee83f0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

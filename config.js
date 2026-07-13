window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a4565da7d2cff0d0eb0fa734fb9feab16c8ddeca/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a4565da7d2cff0d0eb0fa734fb9feab16c8ddeca/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

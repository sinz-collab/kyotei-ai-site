window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ddc91cb8651903ca5bbee1e8fe958a3ccef58a09/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ddc91cb8651903ca5bbee1e8fe958a3ccef58a09/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

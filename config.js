window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2e6df5d59e566bc14104e08b9236e730cc5fe27a/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2e6df5d59e566bc14104e08b9236e730cc5fe27a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/06a7877cb4eaa272654be963bbc86bfc7283f401/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/06a7877cb4eaa272654be963bbc86bfc7283f401/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

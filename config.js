window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cecc4f5b47d69890c5b14cc60ae6250ffbce8f2e/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cecc4f5b47d69890c5b14cc60ae6250ffbce8f2e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

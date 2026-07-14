window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/92db392aa5c3f1a7b8bb5efdb1e880e864d89f7e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/92db392aa5c3f1a7b8bb5efdb1e880e864d89f7e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

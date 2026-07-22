window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/311d0046e2698f8e761112dd99c8176d7970a1b4/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/311d0046e2698f8e761112dd99c8176d7970a1b4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

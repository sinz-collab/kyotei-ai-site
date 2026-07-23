window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/48a59e279f15dfb9a85af1a26479dac484b27b52/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/48a59e279f15dfb9a85af1a26479dac484b27b52/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

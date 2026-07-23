window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2247f6aa44359c5709fa5577683ade6188d52f36/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2247f6aa44359c5709fa5577683ade6188d52f36/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

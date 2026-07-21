window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2c7553cdd6ffab3b7f8baa61fe9eed99d07b5475/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2c7553cdd6ffab3b7f8baa61fe9eed99d07b5475/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

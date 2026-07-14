window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/601e6bf7593a2fb61eb3ff6e70498bc9f3da5050/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/601e6bf7593a2fb61eb3ff6e70498bc9f3da5050/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

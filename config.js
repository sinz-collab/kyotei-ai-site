window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fae9227c6baefaf70f5e317efab7329f354406eb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fae9227c6baefaf70f5e317efab7329f354406eb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

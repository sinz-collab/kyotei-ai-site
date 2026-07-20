window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4853e1ce7f7b8ebfac59da752b9fffbef5616817/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4853e1ce7f7b8ebfac59da752b9fffbef5616817/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

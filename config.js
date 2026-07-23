window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7a01e2fb935ad4e606041ad7cd9fff6a9fbf9aa1/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7a01e2fb935ad4e606041ad7cd9fff6a9fbf9aa1/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

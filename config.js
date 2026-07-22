window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/46c1467ca4563909dfade6bccbcbf66af630c9ff/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/46c1467ca4563909dfade6bccbcbf66af630c9ff/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

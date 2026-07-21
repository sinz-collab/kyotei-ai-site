window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d21ec9515b0d95ee7f4a4461dec79d7348aaf0c2/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d21ec9515b0d95ee7f4a4461dec79d7348aaf0c2/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

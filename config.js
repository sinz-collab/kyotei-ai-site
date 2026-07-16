window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/86f0af7b14f9943a72c922e9e802c019f0bdfe3a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/86f0af7b14f9943a72c922e9e802c019f0bdfe3a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

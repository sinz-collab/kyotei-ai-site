window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6c3907b78f9b81906da8cbd9ab197d06d2a41acc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6c3907b78f9b81906da8cbd9ab197d06d2a41acc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

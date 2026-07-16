window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5c5f700bbba9dab2b13bdcf63a8a792af129d795/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5c5f700bbba9dab2b13bdcf63a8a792af129d795/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

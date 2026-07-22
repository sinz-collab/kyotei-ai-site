window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d45264443d1159b4508f1de700b28bff0f9e86cb/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d45264443d1159b4508f1de700b28bff0f9e86cb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

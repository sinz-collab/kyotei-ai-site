window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/167a4b941dd37cb8b99b3ad357d837e4a906c4ff/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/167a4b941dd37cb8b99b3ad357d837e4a906c4ff/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

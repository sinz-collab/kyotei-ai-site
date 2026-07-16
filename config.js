window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d629dcd76a827553762068c5e1a938a5f2a5c034/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d629dcd76a827553762068c5e1a938a5f2a5c034/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/162710dbeb3511859ee0b524a2e1ed5034cc8fc6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/162710dbeb3511859ee0b524a2e1ed5034cc8fc6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

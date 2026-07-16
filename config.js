window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9e2e632aba8696c6a247c39ee374ea25cba9b2db/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9e2e632aba8696c6a247c39ee374ea25cba9b2db/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

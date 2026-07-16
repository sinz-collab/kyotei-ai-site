window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b334e4f7c37c762358ab36bd75acba2a7e886366/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b334e4f7c37c762358ab36bd75acba2a7e886366/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2e1eacc5d6d8f8c693ea43705b3b4d62428e0ba0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2e1eacc5d6d8f8c693ea43705b3b4d62428e0ba0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0bdfe7d8d0fbb43631f964d152b05f23f441333f/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0bdfe7d8d0fbb43631f964d152b05f23f441333f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b6a252112522158e947e21fcbce80ad2f7a71b40/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b6a252112522158e947e21fcbce80ad2f7a71b40/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/175fe28c857a5f3ce387c22da72867f3b657afeb/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/175fe28c857a5f3ce387c22da72867f3b657afeb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

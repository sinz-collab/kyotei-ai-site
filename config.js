window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fb5bf09e772cc26b807986f9d88289a0ef1fb937/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fb5bf09e772cc26b807986f9d88289a0ef1fb937/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

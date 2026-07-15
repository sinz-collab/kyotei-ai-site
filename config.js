window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/69d0b43ebc410166d8ab8d1e353f3b3b16526f4b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/69d0b43ebc410166d8ab8d1e353f3b3b16526f4b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

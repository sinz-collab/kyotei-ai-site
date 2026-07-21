window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1ab0cbc7cfb4286ff08912d7d17dc62eb923e1d6/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1ab0cbc7cfb4286ff08912d7d17dc62eb923e1d6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

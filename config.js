window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/71ba06197d7dd71bff269370b3b0877c4405ab31/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/71ba06197d7dd71bff269370b3b0877c4405ab31/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

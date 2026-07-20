window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/828e32745d2721074c6f3453a921958c1b207554/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/828e32745d2721074c6f3453a921958c1b207554/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

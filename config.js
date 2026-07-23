window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e7f22b5590d957424197d1087331a7593624ea5f/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e7f22b5590d957424197d1087331a7593624ea5f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

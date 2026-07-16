window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6cc5106bdb59d59c802924d800c9cbb2487029bc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6cc5106bdb59d59c802924d800c9cbb2487029bc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

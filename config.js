window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e30eb96fa2b365c8896d0610679ced498ffd87a1/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e30eb96fa2b365c8896d0610679ced498ffd87a1/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

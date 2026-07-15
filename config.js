window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fd22d01ca9d9f807635e6b2752e4438b946880a2/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fd22d01ca9d9f807635e6b2752e4438b946880a2/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

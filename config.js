window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1e5ce0467a3b829b3786bd47a46e7ce2f3e09752/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1e5ce0467a3b829b3786bd47a46e7ce2f3e09752/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

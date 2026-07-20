window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7d1e7094a8485a547da894dbddc38d31196d38c3/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7d1e7094a8485a547da894dbddc38d31196d38c3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

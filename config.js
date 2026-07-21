window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/40bb715a152958e3fddba4cca781af6f3205f86d/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/40bb715a152958e3fddba4cca781af6f3205f86d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

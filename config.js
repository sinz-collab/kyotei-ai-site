window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4b77364a5e0503b986cce19e823c5fee24d56d3a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4b77364a5e0503b986cce19e823c5fee24d56d3a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

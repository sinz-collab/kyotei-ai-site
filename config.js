window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e11dfb33b15d855c9c07bf69b8aef4de3081ea87/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e11dfb33b15d855c9c07bf69b8aef4de3081ea87/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

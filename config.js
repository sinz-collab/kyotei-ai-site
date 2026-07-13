window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f17db52fb99636cb7f0eac5dd9dfc33d59a219e0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f17db52fb99636cb7f0eac5dd9dfc33d59a219e0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

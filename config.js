window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8d72032345d6fcc4080c356f1c883e2d0b2020a4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8d72032345d6fcc4080c356f1c883e2d0b2020a4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2564a2830bd2bc469161edb6276bea4ddcb99fe4/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2564a2830bd2bc469161edb6276bea4ddcb99fe4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

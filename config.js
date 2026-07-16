window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d460ca5f24e6b52e5bfcd465294c97735597b72b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d460ca5f24e6b52e5bfcd465294c97735597b72b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5e8ec34164d489463bc7595995329a7bf0addbe8/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5e8ec34164d489463bc7595995329a7bf0addbe8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

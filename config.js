window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/60f41e783402eeb14da9c76f7ad30bc11d551090/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/60f41e783402eeb14da9c76f7ad30bc11d551090/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/010d9ba60c6c47576461d1a443d2944853636bd1/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/010d9ba60c6c47576461d1a443d2944853636bd1/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

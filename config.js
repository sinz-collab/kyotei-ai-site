window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3a78521133855b77a617a3f31e048cdbe9f2e6d4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3a78521133855b77a617a3f31e048cdbe9f2e6d4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

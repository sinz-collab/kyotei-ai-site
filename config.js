window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/14f78606a29c168a6ceca623c7e2b16471ac56db/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/14f78606a29c168a6ceca623c7e2b16471ac56db/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

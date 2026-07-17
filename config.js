window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/43207ae88231fcdc1c997c8453464eedd04f3347/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/43207ae88231fcdc1c997c8453464eedd04f3347/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

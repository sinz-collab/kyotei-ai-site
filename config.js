window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/16343b0f5734cb8db9200ef3237a37b59040e417/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/16343b0f5734cb8db9200ef3237a37b59040e417/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

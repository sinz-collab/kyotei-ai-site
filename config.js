window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/64077592f50292854cb451f35a13a1eb882276af/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/64077592f50292854cb451f35a13a1eb882276af/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/235d17588c1f1a4b15a46fa487f51521151bbfe5/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/235d17588c1f1a4b15a46fa487f51521151bbfe5/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

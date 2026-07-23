window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/16580b652f44aed6f528492a889d449f758bd96f/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/16580b652f44aed6f528492a889d449f758bd96f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

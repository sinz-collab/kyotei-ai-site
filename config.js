window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3e7951d7b664f7876dd7fdff737da30a2f2fca7c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3e7951d7b664f7876dd7fdff737da30a2f2fca7c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

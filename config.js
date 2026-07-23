window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c28b5deb29a19318b2ace457a9818dbf1890998b/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c28b5deb29a19318b2ace457a9818dbf1890998b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

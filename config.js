window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4715ea422fdb5dd792e44cda9c0c858c29c8ce14/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4715ea422fdb5dd792e44cda9c0c858c29c8ce14/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

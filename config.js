window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/49f36470d27035cd6a5cf0631d535c4a7105ad85/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/49f36470d27035cd6a5cf0631d535c4a7105ad85/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

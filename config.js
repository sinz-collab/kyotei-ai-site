window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5dcfde356a8bd5565024c2dba9209b5617ec8ce4/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5dcfde356a8bd5565024c2dba9209b5617ec8ce4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

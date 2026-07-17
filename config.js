window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a12682d8f5faa3ae7c05a7cbe0e32bf3a2f42769/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a12682d8f5faa3ae7c05a7cbe0e32bf3a2f42769/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

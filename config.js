window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/27d59ddbcf3cd7bcaedd93ed8f77da970c706930/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/27d59ddbcf3cd7bcaedd93ed8f77da970c706930/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

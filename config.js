window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bd1e69ba49b4b0c441719ae00cc923d53021a00d/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bd1e69ba49b4b0c441719ae00cc923d53021a00d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

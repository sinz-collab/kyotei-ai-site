window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ea4d951ab4c3b20327c1422c2660969d902e6d14/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ea4d951ab4c3b20327c1422c2660969d902e6d14/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

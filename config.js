window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/266bc4b761daabed25aee0a720d3ef0975e083f3/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/266bc4b761daabed25aee0a720d3ef0975e083f3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

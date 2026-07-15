window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9d3d775a68129ce1276f4463bf7daf6cf0ebc0f0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9d3d775a68129ce1276f4463bf7daf6cf0ebc0f0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

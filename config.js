window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/18ccd423cb2bccaac150909a02d406c9981a8b34/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/18ccd423cb2bccaac150909a02d406c9981a8b34/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

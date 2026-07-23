window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/93cc1eedd810a6894689a6282c162366b1d3a8cf/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/93cc1eedd810a6894689a6282c162366b1d3a8cf/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

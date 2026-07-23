window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/36cf8a937688e096639b0fc8af65165c04680fdf/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/36cf8a937688e096639b0fc8af65165c04680fdf/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

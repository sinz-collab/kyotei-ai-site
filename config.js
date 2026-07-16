window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0cde0bfbd98d3775e0e72f761db91b3d76ab17d7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0cde0bfbd98d3775e0e72f761db91b3d76ab17d7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

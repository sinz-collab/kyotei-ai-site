window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4fd85a3d52ee16e942fbefa53f8c6eebf990ecff/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4fd85a3d52ee16e942fbefa53f8c6eebf990ecff/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

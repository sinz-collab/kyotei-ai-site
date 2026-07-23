window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ff0911ae30c788f476e7f5ee36de76cfa3daf7f2/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ff0911ae30c788f476e7f5ee36de76cfa3daf7f2/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

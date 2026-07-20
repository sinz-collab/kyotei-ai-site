window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6e1226d67544e593b9ae1c1315bc814d1495fac7/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6e1226d67544e593b9ae1c1315bc814d1495fac7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

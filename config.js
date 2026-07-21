window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f202321c1123a99dc89ed40b55faa6c1daea3642/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f202321c1123a99dc89ed40b55faa6c1daea3642/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

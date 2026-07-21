window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6f307b23ff3c1055deb1483cbe1ac4addaf010f7/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6f307b23ff3c1055deb1483cbe1ac4addaf010f7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

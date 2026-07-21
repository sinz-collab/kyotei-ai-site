window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a53542ee545041324ecac6551401a4d2532fda03/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a53542ee545041324ecac6551401a4d2532fda03/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

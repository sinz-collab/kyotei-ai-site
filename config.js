window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/26dc582379ab85262fd9bb47773f1f50285d92e1/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/26dc582379ab85262fd9bb47773f1f50285d92e1/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

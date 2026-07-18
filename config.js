window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f4f442ff1ba8e762cb04c628093ff45e3df31cd4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f4f442ff1ba8e762cb04c628093ff45e3df31cd4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

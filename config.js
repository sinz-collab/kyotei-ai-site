window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f046e587fb732f61e070823d8fd5c56b8e1cd668/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f046e587fb732f61e070823d8fd5c56b8e1cd668/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

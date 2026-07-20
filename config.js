window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7cbd33b505456c3ea22146ed56a8a85d64bb85f7/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7cbd33b505456c3ea22146ed56a8a85d64bb85f7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

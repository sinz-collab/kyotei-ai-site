window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/003db9546f7e485c6c411f47386d7401d8d19457/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/003db9546f7e485c6c411f47386d7401d8d19457/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5f4ff7d931faf4adabee7008cb7e1ed817674499/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5f4ff7d931faf4adabee7008cb7e1ed817674499/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

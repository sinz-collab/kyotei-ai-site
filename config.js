window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/41bc841727d7f12c81254eac32e48a6a80a22f30/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/41bc841727d7f12c81254eac32e48a6a80a22f30/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

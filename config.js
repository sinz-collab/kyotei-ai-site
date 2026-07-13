window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/815e2e82c1e87a895efca67b25a2cbfd64015971/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/815e2e82c1e87a895efca67b25a2cbfd64015971/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

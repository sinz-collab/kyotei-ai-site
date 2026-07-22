window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1f6104b117cab68f601f26be3c210320aceb2233/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1f6104b117cab68f601f26be3c210320aceb2233/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

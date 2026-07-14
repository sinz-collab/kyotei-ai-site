window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/748f50cd236fe0434659b760cc26e1fb7ef01cc6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/748f50cd236fe0434659b760cc26e1fb7ef01cc6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

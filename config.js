window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cb4349078429cb45f33f08636e058b7b96b77fe2/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cb4349078429cb45f33f08636e058b7b96b77fe2/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cbcc2e6bcc26cf6926b729426e71ea3883f6c34b/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cbcc2e6bcc26cf6926b729426e71ea3883f6c34b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

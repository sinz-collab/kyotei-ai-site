window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/479ed54fee0fb5893f01359762cb714fc4337ddc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/479ed54fee0fb5893f01359762cb714fc4337ddc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

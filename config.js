window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/93f70ed1c110d6cc2ab0dadb8f6007b8add26d79/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/93f70ed1c110d6cc2ab0dadb8f6007b8add26d79/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/93681a57c145b1426dc452acbf9246e36c11fd54/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/93681a57c145b1426dc452acbf9246e36c11fd54/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

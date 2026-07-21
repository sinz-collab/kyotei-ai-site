window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9cced26b0be630a57fe8b92a47e8712f56a8aa86/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9cced26b0be630a57fe8b92a47e8712f56a8aa86/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

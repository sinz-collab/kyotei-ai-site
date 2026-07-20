window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/04a53a798033de555c1cf561e1029e2997e6f0c4/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/04a53a798033de555c1cf561e1029e2997e6f0c4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

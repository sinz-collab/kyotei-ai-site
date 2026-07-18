window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ddab9957b0aec2c7703b0168500d11f1b2bc5ae9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ddab9957b0aec2c7703b0168500d11f1b2bc5ae9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

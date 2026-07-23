window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/adb25c144e6f3474014b1304c96a402895ac1343/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/adb25c144e6f3474014b1304c96a402895ac1343/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

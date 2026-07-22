window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/66650aaab324a3111575b7ba6c1196c95a05acb5/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/66650aaab324a3111575b7ba6c1196c95a05acb5/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

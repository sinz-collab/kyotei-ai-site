window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f21e25518ae21951d8432bc9531ac3cf904adad5/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f21e25518ae21951d8432bc9531ac3cf904adad5/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

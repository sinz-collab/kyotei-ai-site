window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0a9a71c921637b18352937cbfbf0769c4b7582f9/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0a9a71c921637b18352937cbfbf0769c4b7582f9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

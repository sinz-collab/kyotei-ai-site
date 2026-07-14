window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9ae3b809be6cd1f2469f300a55d6add18060885f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9ae3b809be6cd1f2469f300a55d6add18060885f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

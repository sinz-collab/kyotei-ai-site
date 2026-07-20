window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4af5241ed5b09719b48414bb3280d7ad77a53da8/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4af5241ed5b09719b48414bb3280d7ad77a53da8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);

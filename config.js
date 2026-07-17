window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cc8609445bce8ac7d3aaa8784d10f721aac84863/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cc8609445bce8ac7d3aaa8784d10f721aac84863/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
